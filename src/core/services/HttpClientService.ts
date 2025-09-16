import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from 'axios';
import { env } from '../config/env';
import {
  type HttpFailedQueue,
  type HttpInstance,
  type HttpRequest,
  type HttpResponse,
  HttpStatusCode,
} from '../types/HttpClient';

export class HttpClientService {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: HttpFailedQueue[] = [];

  constructor(args: HttpInstance = {}) {
    const { baseUrl = env.VITE_APP_API_BASE_URL, useCredentials = true } = args;

    this.instance = axios.create({
      baseURL: baseUrl,
      withCredentials: useCredentials,
    });

    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config as AxiosRequestConfig & {
          _retry?: boolean;
        };

        if (originalRequest.url?.startsWith('/auth')) {
          return Promise.reject(error);
        }

        if (
          error.response?.status === HttpStatusCode.UNAUTHORIZED &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({
                config: originalRequest,
                reject,
                resolve,
              });
            });
          }

          this.isRefreshing = true;

          try {
            await this.refreshToken();

            this.failedQueue.forEach(({ config, resolve }) => {
              resolve(this.instance(config));
            });
            this.failedQueue = [];

            return this.instance(originalRequest);
          } catch (refreshError) {
            this.failedQueue.forEach(({ reject }) => {
              reject(refreshError);
            });
            this.failedQueue = [];

            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }
      }
    );
  }

  protected async request<TData = unknown, TBody = unknown>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TData>> {
    const { url, method = 'GET', body, headers, params } = request;
    let response: AxiosResponse;

    try {
      response = await this.instance.request<TData>({
        url,
        method,
        data: body,
        headers,
        params,
      });
    } catch (err) {
      const error = (err as AxiosError).response;

      if (error) {
        response = error;
      } else {
        throw err;
      }
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  }

  private async refreshToken() {
    await this.request({
      url: '/auth/refresh',
      method: 'POST',
    });
  }
}

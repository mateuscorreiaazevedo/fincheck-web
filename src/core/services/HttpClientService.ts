import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import axios from 'axios';
import { type IAuthResponse, tokensUtil } from '@/features/auth';
import { env } from '../config/env';
import {
  type HttpFailedQueue,
  type HttpRequest,
  type HttpResponse,
  HttpStatusCode,
} from '../types/HttpClient';

export class HttpClientService {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: HttpFailedQueue[] = [];

  constructor(
    private readonly BASE_URL: string = env.VITE_APP_API_BASE_URL,
    useCredentials = true
  ) {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
    });

    this.instance.interceptors.request.use(config => {
      const { accessToken } = tokensUtil.getTokens();

      if (useCredentials && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config as AxiosRequestConfig & {
          _retry?: boolean;
        };

        if (originalRequest.url?.startsWith('/auth')) {
          tokensUtil.removeTokens();
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
            const { accessToken, refreshToken } = await this.refreshToken();

            tokensUtil.setTokens({
              accessToken,
              refreshToken,
            });

            this.failedQueue.forEach(({ config, resolve }) => {
              resolve(this.instance(config));
            });
            this.failedQueue = [];

            return this.instance(originalRequest);
          } catch (refreshError) {
            tokensUtil.removeTokens();
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
    const { refreshToken } = tokensUtil.getTokens();

    const response = await this.request<IAuthResponse>({
      url: '/auth/refresh',
      method: 'POST',
      body: { refreshToken },
    });

    return response.data!;
  }
}

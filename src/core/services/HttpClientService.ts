import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { tokensUtil } from '@/features/auth';
import { env } from '../config/env';
import type { HttpRequest, HttpResponse } from '../types/HttpClient';

export class HttpClientService {
  private instance: AxiosInstance;

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
}

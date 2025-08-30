import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type {
  ILoginRequest,
  ILoginResponse,
} from '../types/HttpLoginInterfaces';
import type {
  IRegisterRequest,
  IRegisterResponse,
} from '../types/HttpRegisterInterfaces';

class HttpClientAuthService extends HttpClientService {
  async register(body: IRegisterRequest): Promise<IRegisterResponse> {
    const response = await this.request<IRegisterResponse>({
      url: '/auth/signup',
      method: 'POST',
      body,
    });

    const result = httpResponseHandler(response);

    return result;
  }

  async login(body: ILoginRequest): Promise<ILoginResponse> {
    const response = await this.request<ILoginResponse>({
      url: '/auth/signin',
      method: 'POST',
      body,
    });

    const result = httpResponseHandler(response);

    return result;
  }
}

export const authService = new HttpClientAuthService();

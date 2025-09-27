import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { IAuthMessage } from '../types/HttpAuthResponse';
import type { IMeResponse } from '../types/HttpGetMeResponse';
import type { ILoginRequest } from '../types/HttpLoginInterfaces';
import type { IRegisterRequest } from '../types/HttpRegisterInterfaces';

class HttpClientAuthService extends HttpClientService {
  async register(body: IRegisterRequest): Promise<IAuthMessage> {
    const response = await this.request<IAuthMessage>({
      url: '/auth/signup',
      method: 'POST',
      body,
    });

    const result = httpResponseHandler(response);

    return result;
  }

  async login(body: ILoginRequest): Promise<IAuthMessage> {
    const response = await this.request<IAuthMessage>({
      url: '/auth/signin',
      method: 'POST',
      body,
    });

    const result = httpResponseHandler(response);

    return result;
  }

  async logout(): Promise<void> {
    await this.request<IAuthMessage>({
      url: '/auth/signout',
      method: 'POST',
    });
  }

  async getMe(): Promise<IMeResponse> {
    const response = await this.request<IMeResponse>({
      url: '/users/me',
      method: 'GET',
    });

    const result = httpResponseHandler(response);

    return result;
  }
}

export const authService = new HttpClientAuthService();

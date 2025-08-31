import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { IMeResponse } from '../types/HttpMeResponseInterface';

class HttpClientUsersService extends HttpClientService {
  async getMe(): Promise<IMeResponse> {
    const response = await this.request<IMeResponse>({
      url: '/users/me',
      method: 'GET',
    });

    const result = httpResponseHandler(response);

    return result;
  }
}

export const usersService = new HttpClientUsersService();

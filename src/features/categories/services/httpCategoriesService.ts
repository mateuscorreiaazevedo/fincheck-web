import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { Category } from '../types/Category';

class HttpCategoriesService extends HttpClientService {
  async list(): Promise<Category[]> {
    const response = await this.request<{ data: Category[] }>({
      url: '/categories',
    });

    const { data } = httpResponseHandler(response);
    return data;
  }
}

export const httpCategoriesService = new HttpCategoriesService();

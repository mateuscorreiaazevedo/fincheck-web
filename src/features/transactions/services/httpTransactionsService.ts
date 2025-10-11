import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { HttpCreateTransactionRequest } from '../types/HttpCreateTransactionRequest';
import type { Transaction } from '../types/Transaction';

class HttpTransactionsService extends HttpClientService {
  async create(body: HttpCreateTransactionRequest): Promise<Transaction> {
    const response = await this.request<Transaction>({
      url: '/transactions',
      method: 'POST',
      body,
    });

    return httpResponseHandler(response);
  }
}

export const httpTransactionsService = new HttpTransactionsService();

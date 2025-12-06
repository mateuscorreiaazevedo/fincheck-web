import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { HttpCreateTransactionRequest } from '../types/HttpCreateTransactionRequest';
import type { HttpDeleteTransactionRequest } from '../types/HttpDeleteTransactionRequest';
import type { HttpListTransactionsParams } from '../types/HttpListTransactionsParams';
import type { HttpUpdateTransactionRequest } from '../types/HttpUpdateTransactionRequest';
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

  async list(params: HttpListTransactionsParams): Promise<Transaction[]> {
    const response = await this.request<Transaction[]>({
      url: '/transactions',
      params,
    });

    return httpResponseHandler(response);
  }

  async update({
    body,
    transactionId,
  }: HttpUpdateTransactionRequest): Promise<Transaction> {
    const response = await this.request<Transaction>({
      url: `/transactions/${transactionId}`,
      method: 'PUT',
      body,
    });

    return httpResponseHandler(response);
  }

  async remove({
    transactionId,
  }: HttpDeleteTransactionRequest): Promise<Transaction> {
    const response = await this.request<Transaction>({
      url: `/transactions/${transactionId}`,
      method: 'DELETE',
    });

    return httpResponseHandler(response);
  }
}

export const httpTransactionsService = new HttpTransactionsService();

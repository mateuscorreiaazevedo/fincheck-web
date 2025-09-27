import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { BankAccount } from '../types/BankAccount';
import type { HttpCreateBankAccountRequest } from '../types/HttpCreateBankAccountRequest';

class HttpBankAccountsService extends HttpClientService {
  async create(body: HttpCreateBankAccountRequest): Promise<void> {
    const response = await this.request({
      url: '/bank-accounts',
      method: 'POST',
      body,
    });

    httpResponseHandler(response);
  }

  async list(): Promise<BankAccount[]> {
    const response = await this.request<BankAccount[]>({
      url: '/bank-accounts',
      method: 'GET',
    });

    return httpResponseHandler(response);
  }
}

export const bankAccountsService = new HttpBankAccountsService();

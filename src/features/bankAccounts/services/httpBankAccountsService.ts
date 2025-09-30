import { HttpClientService } from '@/core/services/HttpClientService';
import { httpResponseHandler } from '@/shared';
import type { BankAccount } from '../types/BankAccount';
import type { HttpCreateBankAccountRequest } from '../types/HttpCreateBankAccountRequest';
import type { HttpDeleteBankAccountRequest } from '../types/HttpDeleteBankAccountRequest';
import type { HttpUpdateBankAccountRequest } from '../types/HttpUpdateBankAccountRequest';

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

  async update({
    body,
    bankAccountId,
  }: HttpUpdateBankAccountRequest): Promise<void> {
    const response = await this.request({
      url: `/bank-accounts/${bankAccountId}`,
      method: 'PUT',
      body,
    });

    httpResponseHandler(response);
  }

  async delete({ bankAccountId }: HttpDeleteBankAccountRequest): Promise<void> {
    const response = await this.request({
      url: `/bank-accounts/${bankAccountId}`,
      method: 'DELETE',
    });

    httpResponseHandler(response);
  }
}

export const bankAccountsService = new HttpBankAccountsService();

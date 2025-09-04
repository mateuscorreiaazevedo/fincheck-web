import type { IAuthResponse } from './HttpAuthResponse';

export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type IRegisterResponse = IAuthResponse;

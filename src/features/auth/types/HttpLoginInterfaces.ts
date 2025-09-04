import type { IAuthResponse } from './HttpAuthResponse';

export interface ILoginRequest {
  email: string;
  password: string;
}

export type ILoginResponse = IAuthResponse;

export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  accessToken: string;
  refreshToken: string;
}

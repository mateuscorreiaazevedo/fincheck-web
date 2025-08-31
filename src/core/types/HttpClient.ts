export interface HttpRequest<TBody = unknown> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: TBody;
  headers?: Record<string, string>;
  params?: object;
}

export interface HttpError {
  message?: string | string[];
}

export interface HttpResponse<TData = unknown> {
  statusCode: number;
  data?: TData & HttpError;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

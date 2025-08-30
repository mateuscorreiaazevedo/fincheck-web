import { type HttpResponse, HttpStatusCode } from '../types/HttpClient';

export function httpResponseHandler<T = unknown>(response: HttpResponse<T>): T {
  const { statusCode, data } = response;

  switch (statusCode) {
    case HttpStatusCode.OK:
      return data!;
    case HttpStatusCode.CREATED:
      return data!;
    case HttpStatusCode.NO_CONTENT:
      throw data;
    case HttpStatusCode.BAD_REQUEST:
      throw new Error(data!.message![0]);
    case HttpStatusCode.UNAUTHORIZED:
      throw new Error(data!.message![0]);
    case HttpStatusCode.FORBIDDEN:
      throw new Error(data!.message![0]);
    case HttpStatusCode.NOT_FOUND:
      throw new Error(data!.message![0]);
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      throw new Error(data!.message![0]);
    default:
      throw new Error(
        'Ocorreu um erro inesperado, por favor tente novamente mais tarde.'
      );
  }
}

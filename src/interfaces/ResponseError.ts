export interface IResponseError {
  statusCode: number;
  message: string;
  name?: string;
  stack?: string;
  details?: object;
}
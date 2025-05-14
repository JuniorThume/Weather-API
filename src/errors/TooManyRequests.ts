import { IResponseError } from "../interfaces/ResponseError";

export class TooManyRequestsError extends Error implements IResponseError  {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly details: object;
  constructor(message: string, details: object) {
    super(message);
    this.name = "Too Many Requests";
    this.statusCode = 429;
    this.details = details
  }
}
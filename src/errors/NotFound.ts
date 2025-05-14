import { IResponseError } from "../interfaces/ResponseError";

export class NotFoundError extends Error implements IResponseError  {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly details: object;
  constructor(message: string, details: object) {
    super(message);
    this.name = "Not Found";
    this.statusCode = 404;
    this.details = details
  }
}
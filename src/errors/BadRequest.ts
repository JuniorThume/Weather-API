import { IResponseError } from "../interfaces/ResponseError";

export class BadRequestError extends Error implements IResponseError  {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly details: object;
  constructor(message: string, details: object) {
    super(message);
    this.name = "Bad Request";
    this.statusCode = 400;
    this.details = details
  }
}
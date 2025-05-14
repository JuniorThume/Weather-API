import { IResponseError } from "../interfaces/ResponseError";

export class InternalServerError extends Error implements IResponseError  {
  public readonly statusCode: number;
  public readonly name: string;
  public readonly details: object;
  constructor(message: string, details: object) {
    super(message);
    this.name = "Internal Server Error";
    this.statusCode = 500;
    this.details = details
  }
}
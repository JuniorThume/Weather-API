import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/NotFound";
import { BadRequestError } from "../errors/BadRequest";
import { TooManyRequestsError } from "../errors/TooManyRequests";
import { IResponseError } from "../interfaces/ResponseError";



export default function ErrorHandler (
  err: IResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) : void {
  console.log("❌ - ErrorHandler.ts - err.name:", err.name);
  if (err instanceof Error) {
    res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      details: err.details || {},
    });
  }
    return;
}


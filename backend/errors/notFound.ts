import { NextFunction, Request, Response } from "express";

export const notFound = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  next({ status: 404, message: `Url not found at ${request.originalUrl}` });
};

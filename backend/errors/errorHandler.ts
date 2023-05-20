import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { message = "Something went wrong" } = error;
  response.status(500).json({ error: message });
};

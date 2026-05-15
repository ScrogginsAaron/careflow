import { Request, Response } from "express";

export const getHealth = (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "CareFlow API is running",
    timestamp: new Date().toISOString(),
  });
};
import { NextFunction, Request, Response } from 'express'

export default function errorHandler(callback: (req: Request, res: Response, next?) => Promise<void>) {
  return async function (req: Request, res: Response, next?: NextFunction) {
    try {
      await callback(req, res, next)
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message
      })
    }
  }
}

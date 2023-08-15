import { NextFunction, Request, Response } from 'express'

export default function onError(err, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack)
  res.status(500).json({
    error: err.message
  })
}

export function errorHandler(callback) {
  return async function (req, res, next) {
    try {
      await callback(req, res, next)
    } catch (e) {
      onError(e, req, res, next)
    }
  }
}

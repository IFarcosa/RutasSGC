import { USER_HEADER_IDENTIFIER } from '@config/constant'
import { NextFunction, Request, Response } from 'express'

export default async function checkEmail(req: Request, res: Response, next: NextFunction) {
  const user = req.query[USER_HEADER_IDENTIFIER]

  if (Object.keys(req.body).length === 0 || req.body?.operationName === 'IntrospectionQuery') {
    next()
    return
  }

  if (!user) {
    next(new Error('email header is required'))
  }

  req.headers[USER_HEADER_IDENTIFIER] = user.toString()
  next()
}

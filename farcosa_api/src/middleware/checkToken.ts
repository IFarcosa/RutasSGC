import { NextFunction, Request, Response } from 'express'
import { jwtService } from '@service/index'
import { isEmpty, isNull } from 'lodash'

export default async function checkToken(req: Request, res: Response, next?: NextFunction) {
  try {
    const bearer = req.header('Authorization') as string | null

    if (isNull(bearer) || isEmpty(bearer)) {
      res.status(401).json({
        error: 'missing authorization token'
      })
      return
    }

    if (!bearer.startsWith('Bearer')) {
      res.status(401).json({
        error: 'Bearer token nor provided'
      })
      return
    }

    const token = bearer.slice(7)

    let isTokenValid = jwtService.isTokenValid(token)

    if (!isTokenValid) {
      res.status(401).json({
        error: 'Invalid token'
      })
      return
    }

    next()
  } catch (e) {
    res.status(401).json({
      error: 'Invalid token'
    })
  }
}

import jwt, { JwtPayload } from 'jsonwebtoken'
import UserModel from '@persistence/Models/UserModel'
import * as process from 'process'
import { Request } from 'express'

export default class JwtService {
  private readonly KEY = process.env.JWT_KEY

  generateToken(user: UserModel) {
    const payload: JwtPayload = {
      sub: user.ID.toString(),
      user: user.USER,
      iat: new Date().getTime()
    }
    return jwt.sign(payload, this.KEY, { algorithm: 'HS256', expiresIn: '24h' })
  }

  isTokenValid(token: string) {
    try {
      let decoded = jwt.verify(token, this.KEY) as JwtPayload

      return !!decoded.sub
    } catch (e) {
      return false
    }
  }

  getTokenData(req: Request) {
    try {
      const token = req.header('Authorization')
      const payload = jwt.verify(token.slice('Bearer '.length), this.KEY) as JwtPayload

      return payload
    } catch (e) {
      console.log(e)
    }
  }
}

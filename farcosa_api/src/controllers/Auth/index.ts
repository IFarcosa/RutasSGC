import { Request, Response } from 'express'
import LoginRequest from '@interface/request/LoginRequest'
import { jwtService, userService } from '@service/index'

export default async function getToken(req: Request, res: Response) {
  const data = req.body as LoginRequest
  const user = await userService.findByUserAndPassword(data.user, data.password)

  if (!user) {
    res.status(404).json({
      error: 'User not found'
    })
    return
  }

  res.json({
    token: jwtService.generateToken(user)
  })
}

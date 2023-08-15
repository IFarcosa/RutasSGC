import { Request, Response } from 'express'
import { userService } from '@service/index'
import UserDTO from '@dto/UserDTO'

export default async function getUsers(req: Request, res: Response) {
  const users = await userService.findAll()

  res.json({
    total: users.length,
    users: users.map(UserDTO)
  })
}

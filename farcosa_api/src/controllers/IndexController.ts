import { Request, Response } from 'express'

function get(req: Request, res: Response) {
  res.send('Service is up')
}

export default get

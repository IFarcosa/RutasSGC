import { PROJECT_ROOT } from '@config/constant'
import { Request, Response } from 'express'
import fs from 'fs'

export default function testController(req: Request, res: Response) {
  const report = PROJECT_ROOT + '/test-report.html'

  if (fs.existsSync(report)) {
    res.sendFile(report)
  } else {
    res.status(404)
    res.send('<h1>Tests have not been run</h1>')
  }
}

import * as crypto from 'crypto'
export default function hash(payload: string) {
  return crypto.createHash('sha256').update(payload).digest('hex')
}

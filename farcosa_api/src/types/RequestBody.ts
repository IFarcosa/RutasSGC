import { Request } from 'express'
export type RequestBody<T> = Request<never, never, T, never>

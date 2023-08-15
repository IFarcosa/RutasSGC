import 'dotenv/config'
import './utils/alias'

import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { csp } from '@config/csp'
import defaultRouter from '@controllers/index'
import testController from '@controllers/TestController'
import logRequest from '@middleware/logRequests'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT ?? '3500'

app.use(logRequest())
app.use(csp())
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())

// spread mini-apps rest
app.use('/', defaultRouter)
// test report
app.get('/test-report', testController)
app.get('*', function (_, res) {
  res.redirect('/')
})

server.listen(parseInt(port), '0.0.0.0', 511, () => {
  console.clear()
  return console.log(`server is listening http://127.0.0.1:${port}`)
})

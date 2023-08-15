import express from 'express'
import checkToken from '../middleware/checkToken'

import getIndex from './IndexController'
import getUsers from '@controllers/Users/getUsers'
import getToken from '@controllers/Auth'
import getRutasActivas from '@controllers/Rutas/getRutasActivas'
import { errorHandler } from '../middleware/onError'
import getRutaDetalle from '@controllers/Rutas/getRutaDetalle'
import updateDetalleFactura from '@controllers/Rutas/updateDetalleFactura'
import updateRutaStatus from '@controllers/Rutas/updateRutaStatus'

const defaultRouter = express.Router()

defaultRouter.get('/', getIndex)
defaultRouter.post('/auth', errorHandler(getToken))
defaultRouter.get('/user', checkToken, errorHandler(getUsers))
defaultRouter.get('/rutas', checkToken, errorHandler(getRutasActivas))
defaultRouter.get('/rutas/:rutaId', checkToken, errorHandler(getRutaDetalle))
defaultRouter.post('/rutas/:rutaId/status', checkToken, errorHandler(updateRutaStatus))
defaultRouter.put('/rutas/:rutaId/update-factura', checkToken, errorHandler(updateDetalleFactura))

export default defaultRouter

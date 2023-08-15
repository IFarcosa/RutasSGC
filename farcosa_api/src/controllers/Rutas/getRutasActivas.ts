import { Request, Response } from 'express'
import { jwtService, userService, hojaRutaService } from '@service/index'
import { isNull } from 'lodash'
import HojaRutaDTO from '@dto/HojaRutaDTO'

export default async function getRutasActivas(req: Request, res: Response) {
  const { sub: userId } = jwtService.getTokenData(req)
  const userStore = await userService.findById(parseInt(userId))

  if (isNull(userStore)) {
    res.status(404).json({
      error: 'Usuario no encontrado'
    })

    return
  }

  const rutas = await hojaRutaService.findByConductorAndStatus(userStore.EMPLOYEE_ID, 0)
  res.json({
    rutas: rutas.map(HojaRutaDTO)
  })
}

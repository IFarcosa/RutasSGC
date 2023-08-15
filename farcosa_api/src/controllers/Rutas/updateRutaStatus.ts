import { Request, Response } from 'express'
import { isNull } from 'lodash'
import { hojaRutaService } from '@service/index'
import HojaRutaDTO from '@dto/HojaRutaDTO'

export default async function updateRutaStatus(req: Request, res: Response) {
  const rutaId = parseInt(req.params.rutaId)

  if (isNaN(rutaId) || isNull(rutaId)) {
    res.status(404).json({
      error: 'Param Ruta Id is required'
    })
  }

  const ruta = await hojaRutaService.updateStatus(rutaId, 1)
  res.json(HojaRutaDTO(ruta))
}

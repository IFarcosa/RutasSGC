import { Request, Response } from 'express'
import {isNull, isUndefined} from 'lodash'
import { facturaService, hojaRutaService, vehiculoService, employeeService } from '@service/index'
import HojaRutaDTO from '@dto/HojaRutaDTO'
import FacturaDTO from '@dto/FacturaDTO'
import VehiculoDTO from '@dto/VehiculoDTO'
import EmployeeDTO from '@dto/EmployeeDTO'

export default async function getRutaDetalle(req: Request, res: Response) {
  const rutaId = parseInt(req.params.rutaId)

  if (isNaN(rutaId) || isNull(rutaId)) {
    return res.status(401).json({
      error: 'Param Ruta Id is required'
    })
  }

  const rutaStore = await hojaRutaService.findById(rutaId)

  if (isNull(rutaStore) || isUndefined(rutaStore)) {
    return res.status(404).json({
      error: 'Ruta not found'
    })
  }

  const facturas = await facturaService.findByRutaId(rutaId)
  const vehiculo = await vehiculoService.findById(rutaStore.VEHICULO)
  const conductor = await employeeService.findById(rutaStore.CONDUCTOR)

  res.send({
    ruta: HojaRutaDTO(rutaStore),
    facturas: facturas.map(FacturaDTO),
    vehiculo: VehiculoDTO(vehiculo),
    conductor: EmployeeDTO(conductor)
  })
}

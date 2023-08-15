import { Response } from 'express'
import { RequestBody } from '@ctypes/RequestBody'
import { UpdateFacturaResquest, UpdateFacturaRequestValidator } from '@interface/request/UpdateFacturaStatus'
import { facturaService } from '@service/index'
import FacturaDTO from '@dto/FacturaDTO'

export default async function updateDetalleFactura(req: RequestBody<UpdateFacturaResquest>, res: Response) {
  if (!UpdateFacturaRequestValidator.safeParse(req.body).success) {
    res.status(401).json({
      error: 'Missing required data'
    })
    return
  }

  const { facturaId, entregada, comentarioEnt } = req.body
  const factura = await facturaService.updateFacturaStatus(facturaId, entregada, comentarioEnt)

  res.json(FacturaDTO(factura))
}

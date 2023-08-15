import FacturaModel from '@persistence/Models/FacturaModel'
import {isNull} from "lodash";
import ZonaDTO from "@dto/ZonaDTO";

export default function FacturaDTO(payload: FacturaModel) {
  return {
    factura: payload.FACTURA,
    fechaHora: payload.FECHA_HORA,
    totalFactura: payload.TOTAL_FACTURA,
    embarcarA: payload.EMBARCAR_A,
    direccionFactura: payload.DIRECCION_FACTURA,
    moneda: payload.MONEDA,
    cliente: payload.CLIENTE,
    zona: payload.ZONA,
    rutaId: payload.ID,
    entregada: payload.ENTREGADA,
    fechaEnt: payload.FECHA_ENT,
    comentarioEnt: payload.COMENTARIO_ENT,
    zonaObject: isNull(payload.ZonaObject) ? null : ZonaDTO(payload.ZonaObject)
  }
}

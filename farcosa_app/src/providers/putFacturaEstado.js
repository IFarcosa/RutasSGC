import axios from 'axios'

export default async function putFacturaEstado(
  rutaId,
  facturaId,
  entregada,
  comentarioEnt
) {
  const res = axios.put(`rutas/${rutaId}/update-factura`, {
    facturaId,
    entregada,
    comentarioEnt
  })
}

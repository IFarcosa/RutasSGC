import axios from 'axios'
import { faker } from '@faker-js/faker'

export async function getFakeRoutaDetalle(rutaId) {
  return {
    datetime: new Date(),
    bodega: 'CEDI',
    vehiculo: 'honda M 12434',
    conductor: faker.person.fullName(),
    estado: 'En ruta',
    estadoId: 1,
    facturas: [
      {
        facturaId: faker.number.int({ min: 100, max: 999 }),
        fecha: new Date(),
        address: faker.location.city(),
        cliente: faker.company.name()
      },
      {
        facturaId: faker.number.int({ min: 100, max: 999 }),
        fecha: new Date(),
        address: faker.location.city(),
        cliente: faker.company.name()
      },
      {
        facturaId: faker.number.int({ min: 100, max: 999 }),
        fecha: new Date(),
        address: faker.location.city(),
        cliente: faker.company.name()
      }
    ]
  }
}

/**
 *
 * @param {number} rutaId
 * @returns {Promise<{
 *  ruta: {
 *  id: number
 *  usuarioCreacion: string
 *  fechaCreacion?: string
 *  vechiculoId: string
 *  conductorId: string
 *  recibida: string
 *  fechaRec?: string
 *  tipo: number
 *  referencia: string
 *  appletStatus: number
 * }
 * facturas: Array<{
 *  factura: string
 *  fechaHora?: string
 *  totalFactura: number
 *  embarcarA: string
 *  direccionFactura: string
 *  moneda: "L" | "D" | string
 *  cliente: string
 *  zona: string
 *  rutaId: number
 *  entregada: "S" | "N"
 *  fechaEnt?: string
 *  comentarioEnt?: string
 *  zonaObject: {
 *    zonaId: string
 *    nombre: string
 *  }
 * }>
 * vehiculo: {
 *  codigo: string
 *  descripcion: string
 *  placa: string
 * }
 * conductor: {
 *  empleadoId: string
 *  nombre: string
 *  identificacion: string
 * }
 * }>}
 */
export async function getRutaDetalle(rutaId) {
  try {
    const res = await axios.get(`rutas/${rutaId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

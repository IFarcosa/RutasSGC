import axios from 'axios'
import sleep from '../utils/sleep'
import { faker } from '@faker-js/faker'

export async function getFakeRutas() {
  const length = faker.number.int({ min: 1, max: 10 })
  const items = []

  for (let i = 0; i < length; i++) {
    items.push({
      numero: faker.number.int({ min: 100, max: 999 }),
      bodega: faker.person.firstName(),
      estado: faker.number.int({ min: 0, max: 1 }) === 0 ? 'En ruta' : 'Despachado'
    })
  }

  return items
}

/* "id": 22,
            "usuarioCreacion": "EGUEVARA",
            "fechaCreacion": "2023-06-10T22:33:48.777Z",
            "vehiculoId": "V007",
            "conductorId": "E0121",
            "recibida": "N",
            "fechaRec": null,
            "tipo": 1,
            "referencia": "",
            "appletStatus": 0 */

/**
 *
 * @returns {Promise<Array<{
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
 * }>>}
 */
export async function getRutasActivas() {
  try {
    const res = await axios.get('rutas')
    const rutas = res.data.rutas
    return rutas
  } catch (error) {
    throw error
  }
}

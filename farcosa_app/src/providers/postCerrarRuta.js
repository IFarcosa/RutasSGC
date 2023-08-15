import axios from 'axios'

export default function postCerrarRuta(rutaId) {
  const res = axios.post(`rutas/${rutaId}/status`)
  return res
}

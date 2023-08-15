import VehiculoModel from '@persistence/Models/VehiculoModel'

export default function VehiculoDTO(payload: VehiculoModel) {
  return {
    codigo: payload.U_CODIGO,
    descripcion: payload.U_DESCRIP,
    placa: payload.U_U_PLACA
  }
}

import HojaRutaModel from '@persistence/Models/HojaRutaModel'

export default function HojaRutaDTO(payload: HojaRutaModel) {
  return {
    id: payload.ID,
    usuarioCreacion: payload.USUARIO_CREACION,
    fechaCreacion: payload.FECHA_CREACION,
    vehiculoId: payload.VEHICULO,
    conductorId: payload.CONDUCTOR,
    recibida: payload.RECIBIDA,
    fechaRec: payload.FECHA_REC,
    tipo: payload.TIPO,
    referencia: payload.REFERENCIA,
    appletStatus: payload.APPLET_STATUS
  }
}

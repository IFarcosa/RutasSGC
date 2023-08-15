import { Model } from 'objection'

export default class HojaRutaModel extends Model {
  public ID: number
  public USUARIO_CREACION: string
  public FECHA_CREACION: Date
  public VEHICULO: string
  public CONDUCTOR: string
  public RECIBIDA: string
  public FECHA_REC: Date
  public TIPO: number
  public REFERENCIA: string
  public APPLET_STATUS: number

  public static idColumn = 'ID'

  static get tableName() {
    return 'HOJA_RUTA'
  }

  static getQuery() {
    return this.query().withSchema('FARCOSA')
  }
}

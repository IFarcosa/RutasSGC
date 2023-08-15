import { Model } from 'objection'

export default class VehiculoModel extends Model {
  public U_CODIGO: string
  public U_DESCRIP: string
  public U_U_PLACA: string

  public static idColumn = 'U_CODIGO'

  static get tableName() {
    return 'U_VEHICULO'
  }

  static getQuery() {
    return this.query().withSchema('FARCOSA')
  }
}

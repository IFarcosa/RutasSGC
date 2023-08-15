import { Model } from 'objection'

export default class EmployeeModel extends Model {
  public EMPLEADO: string
  public NOMBRE: string
  public IDENTIFICACION: string

  public static idColumn = 'EMPLEADO'

  static get tableName() {
    return 'EMPLEADO'
  }

  static getQuery() {
    return this.query().withSchema('FARCOSA')
  }
}

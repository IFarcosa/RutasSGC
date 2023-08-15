import { Model } from 'objection'

export default class UserModel extends Model {
  public ID: number
  public EMPLOYEE_ID: string
  public USER: string
  public PASSCODE: string
  public ROLE: string

  public static idColumn = 'ID'

  static get tableName() {
    return 'USUARIO_APPLET'
  }

  static getQuery() {
    return this.query().withSchema('FARCOSA')
  }
}

import { Model } from 'objection'
import ZonaModel from "@persistence/Models/ZonaModel";

export default class FacturaModel extends Model {
  public FACTURA: string
  public FECHA_HORA: Date
  public TOTAL_FACTURA: number
  public EMBARCAR_A: string
  public DIRECCION_FACTURA: string
  public MONEDA: string
  public CLIENTE: string
  public ZONA: string

  /**
   * Related HOJA_RUTA ID
   */
  public ID: number

  /**
   * S/N
   */
  public ENTREGADA: string
  public FECHA_ENT: Date
  public COMENTARIO_ENT: string
  public ZonaObject: ZonaModel = null
  public static idColumn = 'FACTURA'

  static get tableName() {
    return 'FACTURA'
  }

  static getQuery() {
    return this.query().withSchema('FARCOSA')
  }

  static get relationMappings() {
    return {
      ZonaObject:{
        relation: Model.BelongsToOneRelation,
        modelClass: ZonaModel,
        join: {
          from: "FACTURA.ZONA",
          to: "ZONA.ZONA"
        }
      }
    }
  }
}

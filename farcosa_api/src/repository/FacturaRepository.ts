import FacturaRepoBuilder from '@repository/implementation/FacturaRepoBuilder'
import FacturaModel from '@persistence/Models/FacturaModel'
import DbInstanceObject from '@persistence/DBInstance'
import moment from 'moment-timezone'

export default class FacturaRepository implements FacturaRepoBuilder {
  constructor() {
    FacturaModel.knex(DbInstanceObject.getKnex)
  }

  async findByRutaId(rutaId) {
    return FacturaModel.getQuery().withGraphJoined("ZonaObject").where('ID', rutaId)
  }

  async updateFacturaStatus(factura: string, status: string, comentario: string) {
    let date = moment().tz(process.env.DB_TZ).format('YYYY-MM-DD HH:mm:ss')
    
    return FacturaModel.getQuery().updateAndFetchById(factura, {
      ENTREGADA: status,
      COMENTARIO_ENT: comentario,
      FECHA_ENT: (status === 'S' ? date : null) as unknown as Date
    })
  }
}

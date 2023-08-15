import HojaRutaModel from '@persistence/Models/HojaRutaModel'
import DbInstanceObject from '@persistence/DBInstance'
import HojaRutaRepoBuilder from '@repository/implementation/HojaRutaRepoBuilder'

export default class HojaRutaRepository implements HojaRutaRepoBuilder {
  constructor() {
    HojaRutaModel.knex(DbInstanceObject.getKnex)
  }

  async findById<T = HojaRutaModel>(id: number) {
    return HojaRutaModel.query().withSchema('FARCOSA').findById(id) as T
  }

  async findAllByEmployeeAndStatus(employee, status = 0) {
    return HojaRutaModel.getQuery().where('APPLET_STATUS', status).andWhere('CONDUCTOR', employee)
  }

  async updateStatus(id, status) {
    return HojaRutaModel.getQuery().updateAndFetchById(id, {
      APPLET_STATUS: status
    })
  }
}

import Repository from '@repository/implementation/Repository'
import VehiculoModel from '@persistence/Models/VehiculoModel'
import DbInstanceObject from '@persistence/DBInstance'

export default class VehiculoRepository implements Repository {
  constructor() {
    VehiculoModel.knex(DbInstanceObject.getKnex)
  }

  async findAll<T = VehiculoModel[]>() {
    return (await VehiculoModel.getQuery().select('*')) as T
  }

  async findById<T = VehiculoModel>(id: string) {
    return (await VehiculoModel.getQuery().findById(id)) as T
  }
}

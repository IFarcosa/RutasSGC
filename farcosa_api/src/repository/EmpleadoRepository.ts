import Repository from '@repository/implementation/Repository'
import EmployeeModel from '@persistence/Models/EmployeeModel'
import DbInstanceObject from '@persistence/DBInstance'

export default class EmpleadoRepository implements Repository {
  constructor() {
    EmployeeModel.knex(DbInstanceObject.getKnex)
  }

  async findById<T = EmployeeModel>(id: string) {
    return EmployeeModel.getQuery().findById(id) as T
  }
}

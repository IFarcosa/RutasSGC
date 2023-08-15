import Repository from '@repository/implementation/Repository'
import EmployeeModel from '@persistence/Models/EmployeeModel'

export default class EmployeeService {
  constructor(private employeeRepo: Repository) {}

  findById(id: string) {
    return this.employeeRepo.findById<EmployeeModel>(id)
  }
}

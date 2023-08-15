import Repository from '@repository/implementation/Repository'
import VehiculoModel from '@persistence/Models/VehiculoModel'

export default class VehiculoService {
  constructor(private vehiculoRepo: Repository) {}

  findAll() {
    return this.vehiculoRepo.findAll<Array<VehiculoModel>>()
  }

  findById(id: string) {
    return this.vehiculoRepo.findById<VehiculoModel>(id)
  }
}

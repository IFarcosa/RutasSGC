import Repository from '@repository/implementation/Repository'
import HojaRutaModel from '@persistence/Models/HojaRutaModel'
import HojaRutaRepoBuilder from '@repository/implementation/HojaRutaRepoBuilder'

export default class HojaRutaService {
  constructor(private hojaRutaRepo: HojaRutaRepoBuilder) {}

  findById(rutaID: number) {
    return this.hojaRutaRepo.findById<HojaRutaModel>(rutaID)
  }

  findByConductorAndStatus(conductor, status = 0) {
    return this.hojaRutaRepo.findAllByEmployeeAndStatus(conductor, status)
  }

  updateStatus(id, status) {
    return this.hojaRutaRepo.updateStatus(id, status)
  }
}

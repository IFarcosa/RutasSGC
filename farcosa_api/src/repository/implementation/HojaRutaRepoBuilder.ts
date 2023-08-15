import Repository from '@repository/implementation/Repository'
import HojaRutaModel from '@persistence/Models/HojaRutaModel'

export default interface HojaRutaRepoBuilder extends Repository {
  findAllByEmployeeAndStatus: (employee: string, status?: number) => Promise<HojaRutaModel[]>

  updateStatus: (id: number, status: number) => Promise<HojaRutaModel>
}

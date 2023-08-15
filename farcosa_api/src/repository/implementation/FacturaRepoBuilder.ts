import Repository from '@repository/implementation/Repository'
import FacturaModel from '@persistence/Models/FacturaModel'

export default interface FacturaRepoBuilder extends Repository {
  findByRutaId: (rutaId: number) => Promise<FacturaModel[]>

  updateFacturaStatus: (facturaId: string, status: string, comentario: string) => Promise<FacturaModel>
}

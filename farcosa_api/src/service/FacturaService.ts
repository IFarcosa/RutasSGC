import FacturaRepoBuilder from '@repository/implementation/FacturaRepoBuilder'

export default class FacturaService {
  constructor(private facturaRepo: FacturaRepoBuilder) {}

  findByRutaId(rutaId: number) {
    return this.facturaRepo.findByRutaId(rutaId)
  }

  updateFacturaStatus(facturaId, status, comentario) {
    return this.facturaRepo.updateFacturaStatus(facturaId, status, comentario)
  }
}

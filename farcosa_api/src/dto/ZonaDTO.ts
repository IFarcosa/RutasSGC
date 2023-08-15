import ZonaModel from "@persistence/Models/ZonaModel";

export default function ZonaDTO(payload: ZonaModel) {
    return {
        zonaId: payload.ZONA,
        nombre: payload.NOMBRE
    }
}
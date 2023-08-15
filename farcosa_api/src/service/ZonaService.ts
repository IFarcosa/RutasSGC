import Repository from "@repository/implementation/Repository";
import ZonaModel from "@persistence/Models/ZonaModel";

export default class ZonaService {

    constructor(private repo: Repository) {


    }

    findById(id) {
        return this.repo.findById<ZonaModel>(id)
    }

}
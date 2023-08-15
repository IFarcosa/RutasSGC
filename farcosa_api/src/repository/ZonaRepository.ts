import Repository from "@repository/implementation/Repository";
import ZonaModel from "@persistence/Models/ZonaModel";
import DbInstanceObject from "@persistence/DBInstance";

export default class ZonaRepository implements Repository {

    constructor() {
        ZonaModel.knex(DbInstanceObject.getKnex)
    }

    findById<T = ZonaModel>(id) {
        return ZonaModel.getQuery().findById(id) as T
    }
}
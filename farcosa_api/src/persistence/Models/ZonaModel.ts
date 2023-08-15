import {Model} from "objection";

export default class ZonaModel extends Model {

    public ZONA: string
    public NOMBRE: string

    public static idColumn = 'ZONA'

    static get tableName() {
        return 'ZONA'
    }

    static getQuery() {
        return this.query().withSchema('FARCOSA')
    }
}
import { Model } from 'objection'

export default class BaseModel extends Model {
  public static idColumn = '_id'
}

import UserModel from '@persistence/Models/UserModel'
import DbInstanceObject from '@persistence/DBInstance'
import UserRepoBuilder from '@repository/implementation/UserRepoBuilder'

export default class UserRepository implements UserRepoBuilder {
  constructor() {
    UserModel.knex(DbInstanceObject.getKnex)
  }

  async findAll<T = UserModel[]>() {
    return UserModel.getQuery().select('*') as T
  }

  async findByUserAndPassword(user: string, password: string) {
    return UserModel.getQuery().findOne('USER', user).andWhere('PASSCODE', password)
  }

  async findById<T = UserModel>(userId: number) {
    return UserModel.getQuery().findById(userId) as T
  }
}

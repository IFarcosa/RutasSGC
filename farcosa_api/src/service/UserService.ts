import Repository from '@repository/implementation/Repository'
import UserModel from '@persistence/Models/UserModel'
import UserRepository from '@repository/UserRepository'
import UserRepoBuilder from '@repository/implementation/UserRepoBuilder'
import hash from '@utils/hash'

export default class UserService {
  constructor(private repo: UserRepoBuilder) {}

  findAll() {
    return this.repo.findAll<UserModel[]>()
  }

  findByUserAndPassword(user: string, password: string) {
    return this.repo.findByUserAndPassword(user, hash(password))
  }

  findById(id: number) {
    return this.repo.findById<UserModel>(id)
  }
}

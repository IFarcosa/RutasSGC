import Repository from '@repository/implementation/Repository'
import UserModel from '@persistence/Models/UserModel'

export default interface UserRepoBuilder extends Repository {
  findByUserAndPassword: (user: string, password: string) => Promise<UserModel>
}

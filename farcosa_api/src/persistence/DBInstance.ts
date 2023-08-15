import { Environment } from '@config/enums'
import knex, { Knex } from 'knex'
import config from './knexfile'

class DbInstance {
  private static instance: DbInstance
  private knex: Knex

  constructor() {
    if (typeof DbInstance.instance === 'object') {
      return DbInstance.instance
    }

    this.onCreate()
    DbInstance.instance = this

    return this
  }

  onCreate() {
    const environment = process.env.NODE_ENV ?? Environment.dev
    const args = config[environment]
    this.knex = knex(args)
  }

  get getKnex() {
    return this.knex
  }
}

const DbInstanceObject = new DbInstance()

export default DbInstanceObject

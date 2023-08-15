import * as dotenv from 'dotenv'
import type { Knex } from 'knex'

const pathEnv = (process.env.PWD ?? '../../') + '/.env'
dotenv.config({ path: pathEnv })

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mssql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT)
    },
    migrations: {
      tableName: 'KNEX_MIGRATIONS',
      directory: __dirname + '/migrations',
      schemaName: 'FARCOSA'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  production: {
    client: 'mssql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT)
    },
    migrations: {
      tableName: 'KNEX_MIGRATIONS',
      directory: __dirname + '/migrations',
      schemaName: 'FARCOSA'
    }
  }
}
export default config

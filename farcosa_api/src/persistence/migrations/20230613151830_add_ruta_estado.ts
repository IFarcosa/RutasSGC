import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.withSchema('FARCOSA').alterTable('HOJA_RUTA', tableBuilder => {
    tableBuilder.integer('APPLET_STATUS').defaultTo(0)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('FARCOSA').alterTable('HOJA_RUTA', tableBuilder => {
    tableBuilder.dropColumn('APPLET_STATUS')
  })
}

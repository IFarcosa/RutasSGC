import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.withSchema('FARCOSA').createTable('USUARIO_APPLET', tableBuilder => {
    tableBuilder.increments('ID').primary()
    tableBuilder.string('EMPLOYEE_ID').notNullable().unique().index()
    tableBuilder.string('USER').notNullable()
    tableBuilder.string('PASSCODE').notNullable()
    tableBuilder.string('ROLE').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('FARCOSA').dropTable('USUARIO_APPLET')
}

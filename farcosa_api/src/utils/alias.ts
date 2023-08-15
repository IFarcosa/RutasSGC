import moduleAlias from 'module-alias'
import path from 'path'
import * as process from 'process'

if (parseInt(process.env.USE_ALIAS) === 1) {
  const data = require('../../tsconfig.json')

  const tsPaths = data.compilerOptions.paths
  const alias = {}

  for (let key of Object.keys(tsPaths)) {
    let aliasValue = tsPaths[key][0].replace('./src', '').replace('/*', '')
    let aliasKey = key.replace('/*', '')
    alias[aliasKey] = path.join(path.dirname(__dirname), aliasValue)
  }
  moduleAlias.addAliases(alias)
}

const path = require('path')
const fs = require('fs')

const stepDefinitionFiles = fs.readdirSync(__dirname)
  .filter((file) => file.endsWith('.js') && file !== 'index.js')

for (const file of stepDefinitionFiles) {
  require(path.join(__dirname, file))
}

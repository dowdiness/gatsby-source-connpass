const conpassSchemas = require('./conpassSchemas')

const getTypeDef = (name, schema) => {
  return `
    type ${name} implements Node {
      ${schema}
    }
  `
}

module.exports = () => {
  return Object.keys(conpassSchemas).map(key =>
    getTypeDef(key, conpassSchemas[key])
  )
}

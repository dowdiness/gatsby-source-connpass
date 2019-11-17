const fetch = require('node-fetch')
const getTypeDefs = require('./utils/getTypeDefs')
const createNodeEntities = require('./createNodeEntities')
const flattenEntities = require('./utils/flattenEntities')
const conpassSchemas = require('./utils/conpassSchemas')
const normalizeId = require('./utils/normalizeId')

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest, store, cache },
  configOptions
) => {
  const { createNode, createTypes, touchNode } = actions
  const { params = {}, pagenation = false } = configOptions

  const conpassUrl = `https://connpass.com/api/v1/event/?${conpassParams}`

  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(conpassUrl)
  // Process data into nodes.

  const typeDefs = getTypeDefs()
  createTypes(typeDefs)

  // build entities and correct schemas, where necessary
  let entities = flattenEntities(
    createNodeEntities({
      name: 'Connpass',
      data,
      schemas: conpassSchemas,
      createNodeId
    })
  )

  // check for problematic keys
  entities = entities.map(entity => ({
    ...entity,
    data: normalizeId(entity.data)
  }))

  data.forEach(datum => createNode(processDatum(datum)))
}

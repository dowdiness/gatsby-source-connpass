const fetch = require('node-fetch')
const getTypeDefs = require('./utils/getTypeDefs')

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

  const typeDefs = getTypeDefs(schemas, imageKeys)
  createTypes(typeDefs)

  data.forEach(datum => createNode(processDatum(datum)))
}

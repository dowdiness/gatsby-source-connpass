const fetch = require("node-fetch");
const getTypeDefs = require("./utils/getTypeDefs");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  store,
  cache
}) => {
  const { createNode, createTypes, touchNode } = actions
  const {
    params = {},
    pagenation = false
  } = configOptions

  const conpassParams = Object.entries(params).forEach(([key, value]) => {
    `${key}=${value}`
  }).reduce((query, currentQuery, currentIndex, array) => {
    query + currentQuery + currentIndex !== array.length - 1 ? '&' : ''
  })

  const conpassUrl = `https://connpass.com/api/v1/event/?${conpassParams}`

  // Create nodes here, generally by downloading data
  // from a remote API.
  const data = await fetch(REMOTE_API);
  // Process data into nodes.

  const typeDefs = getTypeDefs(schemas, imageKeys)
  createTypes(typeDefs)

  data.forEach(datum => createNode(processDatum(datum)))

  return
}

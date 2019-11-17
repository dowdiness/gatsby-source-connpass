function isRestricted(key) {
  if (key === 'id') {
    return `${key}__normalized`
  }
  return key
}

module.exports = function checkRestricted(data) {
  console.log(
    `The key "id" is restricted in GraphQl. Convert it to id__normalized`
  )
  const dataNormalized = {}
  Object.keys(data).forEach(key => {
    dataNormalized[isRestricted(key)] = data[key]
  })
  return dataNormalized
}

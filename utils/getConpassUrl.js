module.exports = (params) => {
  if (!params) {
    console.log('Params-Error. You have to define params option.')
    return
  }
  if (typeof params !== 'object') {
    console.log('Params-Error. Params option is only for object.')
    return
  }

  const conpassParams = Object.entries(params).forEach(([key, value]) => {
    `${key}=${value}`
  }).reduce((query, currentQuery, currentIndex, array) => {
    query + currentQuery + currentIndex !== array.length - 1 ? '&' : ''
  })

  const conpassUrl = `https://connpass.com/api/v1/event/?${conpassParams}`
  console.log(conpassUrl)
  return conpassUrl
}

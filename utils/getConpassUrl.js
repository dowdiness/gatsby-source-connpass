module.exports = (params) => {
  if (!params) {
    console.log('Params-Error. You have to define params option.')
    return
  }
  if (typeof params !== 'object') {
    console.log('Params-Error. Params option is only for object.')
    return
  }

  const conpassParams = Object.entries(params).map(([key, value], index, paramsArray) => {
    if (index === paramsArray.length -1 ) {
      return`${key}=${value}`
    }
    return`${key}=${value}&`
  }).reduce((query, currentQuery) => {
    return query + currentQuery
  })

  return `https://connpass.com/api/v1/event/?${conpassParams}`
}

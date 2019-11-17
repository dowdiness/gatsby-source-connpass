/* eslint-disable no-undef */
const getConpassUrl = require('../utils/getConpassUrl')

// create a function into global context for Jest
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}

test('getConpassUrl with params series_id=7278&order=1&count=100', () => {
  expect(getConpassUrl({ series_id: 7278, order: 1, count: 100 })).toBe(
    'https://connpass.com/api/v1/event/?series_id=7278&order=1&count=100'
  )
})

test('get console.error when getConpassUrl called without params', () => {
  getConpassUrl()
  expect(global.console.error).toHaveBeenCalledWith(
    'Params-Error. You have to define params option.'
  )
})

test('get console.error when getConpassUrl called with not object type', () => {
  getConpassUrl('series_id: 7278, order: 1, count: 100')
  expect(global.console.error).toHaveBeenCalledWith(
    'Params-Error. Params option is only for object.'
  )
})

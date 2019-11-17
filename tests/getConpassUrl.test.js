const getConpassUrl = require('../utils/getConpassUrl');

test('getConpassUrl with params series_id=7278&order=1&count=100', () => {
  expect(getConpassUrl(
      {series_id: 7278, order: 1, count: 100}
    )).toBe('https://connpass.com/api/v1/event/?series_id=7278&order=1&count=100')
})

import fetchMock from 'fetch-mock';

export function getOrders() {
  return fetchMock.get('/api/orders', {
    'id': '1',
    'name': 'test'
  })
}

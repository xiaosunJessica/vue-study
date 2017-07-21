export async function getOrders(query) {
 let rs = await Request("get", "api/orders")
 return rs.url
}

function Request(method, url) {
  return {
    method,
    url
  }
}
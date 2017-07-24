const orders = {list: [{
                      id: '17071715581439284',
                      brief: 'red',
                      status: 'closed',
                      useId: '392',
                      cellNumber: '123456',
                      completedAt: null,
                      orderAmount: '0.01',
                      totalPrice: '0.01',
                      shop: {
                        id: 1,
                        logoImage: 'https://avatars2.githubusercontent.com/u/1235010',
                        name: 'test'
                      }
                    }],
              page: {
                current: 1,
                total: 22
              }
      }

export async function getOrders(cb) {
  // console.warn(cb)
  // return '111'
//  let rs = await cb(orders)
 return orders
}

export default{
  getOrders
}
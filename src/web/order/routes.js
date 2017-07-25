import OrderList from './list.vue';
import OrderDetail from './components/detail.vue';

export const routes = [{
  name: 'OrderList',
  path: '/orders',
  component: OrderList
},{
  name: 'OrderDetail',
  path: '/orders/:id',
  component: OrderDetail
}];
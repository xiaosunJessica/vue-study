import order from '../../api/order';
// import { actionTypes } from './store.js';
export const getOrders = () => {
  return order.getOrders();
}
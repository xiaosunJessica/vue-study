import getOrdersAPI from '../../api/order';
// import { actionTypes } from './store.js';
export const getOrders = () => {
  return getOrdersAPI();
};
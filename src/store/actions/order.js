import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purshaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purshaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purshaseBurgerStart = () => {
  return {
    type: actionTypes.PURSHASE_BURGER_START,
  };
};

export const purshaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purshaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then((response) => {
        dispatch(purshaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => dispatch(purshaseBurgerFail(error)));
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart())
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersStart(err))
      });
  };
};





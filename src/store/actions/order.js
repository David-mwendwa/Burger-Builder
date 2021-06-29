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

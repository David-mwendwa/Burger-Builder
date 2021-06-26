import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purshaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
}

export const purshaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  }
}

export const purshaseBurgerStart = (orderData) => {
  return dispatch => {
    axios
      .post('/orders.json', orderData)
      .then((response) => {
        dispatch(purshaseBurgerSuccess(response.data))
      })
      .catch((error) => dispatch(purshaseBurgerFail(error)));
  }
}
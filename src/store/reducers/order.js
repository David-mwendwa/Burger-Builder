import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const INITIAL_STATE = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return updateObject(state, { purchased: false });
    case actionTypes.PURSHASE_BURGER_START:
      return updateObject(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.orderId });
      return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      });
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders, loading: false });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;

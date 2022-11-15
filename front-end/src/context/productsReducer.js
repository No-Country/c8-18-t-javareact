import {
  PRODUCT_SELECTED_SUCCESS,
  CONFIRM_PRODUCT_SUCCESS,
  DELETED_SUCCESS,
  TOTAL_SUCCESS,
  MY_ORDEN,
  SUBTOTAL_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case PRODUCT_SELECTED_SUCCESS:
      return {
        ...state,
        productos: action.payload,
      };
    case CONFIRM_PRODUCT_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case DELETED_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter(order => order.key !== action.payload),
      };
    case TOTAL_SUCCESS:
      return {
        ...state,
        total: action.payload,
      };
    case SUBTOTAL_SUCCESS:
      return {
        ...state,
        subTotal: action.payload,
      };
    case MY_ORDEN:
      return {
        ...state,
        orders: [],
        total: 0,
        subTotal: 0,
        idorder: action.payload,
      };
    default:
      return state;
  }
};

import React, { useReducer } from 'react';
import Cookies from 'js-cookie';

import ProductsContext from './productsContext';
import productsReducer from './productsReducer';
import {
  PRODUCT_SELECTED_SUCCESS,
  CONFIRM_PRODUCT_SUCCESS,
  DELETED_SUCCESS,
  TOTAL_SUCCESS,
  MY_ORDEN,
  SUBTOTAL_SUCCESS } from '../types';

import PropTypes from 'prop-types';

const ProductsState = (props) => {
  const initialState = {
    orders: [],
    productos: null,
    total: 0,
    subTotal: 0,
    idorder: '',
    key: '',
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const selectedProduct = (productos) => {
    Cookies.set('productos', JSON.stringify(productos));
    dispatch({
      type: PRODUCT_SELECTED_SUCCESS,
      payload: productos,
    });
  };

  // //agregar producto
  const addOrder = (orders) => {
    Cookies.remove('orden');
    dispatch({
      type: CONFIRM_PRODUCT_SUCCESS,
      payload: orders,
    });
  };

  // //Eliminar el pedido
  const removeOrder = (key) => {
    dispatch({
      type: DELETED_SUCCESS,
      payload: key,
    });
  };

  // // Calcular el total
  const calculateTotal = (total) => {
    dispatch({
      type: TOTAL_SUCCESS,
      payload: total,
    });
  };

  // // Calcular el total
  const calculateSubTotal = (subTotal) => {
    dispatch({
      type: SUBTOTAL_SUCCESS,
      payload: subTotal,
    });
  };

  // //Mis pedidios
  const OrderPlaced = (id) => {
    Cookies.remove('productos');
    Cookies.set('orden', key);
    dispatch({
      type: MY_ORDEN,
      payload: id,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        orders: state.orders,
        productos: state.productos,
        total: state.total,
        subTotal: state.subTotal,
        idorder: state.idorder,
        key_order: state.key_order,
        localStorage: state.localStorage,
        selectedProduct,
        addOrder,
        removeOrder,
        calculateTotal,
        calculateSubTotal,
        OrderPlaced,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

ProductsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsState;


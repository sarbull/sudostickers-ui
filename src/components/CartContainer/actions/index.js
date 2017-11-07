import * as guId from 'guid';
import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const API_URL = env.REACT_APP_API_URL;

function apiUrl(data) {
  console.log('process.env.REACT_APP_API_URL=', data);
}

apiUrl(API_URL);

export const ADD_TO_CART='ADD_TO_CART';
export function addToCart(p) {
  const guid = guId.raw();

  const product = {
    ...p,
    guid
  };

  return {
    type: ADD_TO_CART,
    product
  };
}

export const REMOVE_FROM_CART='REMOVE_FROM_CART';
export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product
  };
}

export const EMPTY_CART='EMPTY_CART';
export function emptyCart() {
  return {
    type: EMPTY_CART
  };
}

export const SAVE_ORDER='SAVE_ORDER';
export const SAVE_ORDER_REQUEST='SAVE_ORDER_REQUEST';
export const SAVE_ORDER_SUCCESS='SAVE_ORDER_SUCCESS';
export const SAVE_ORDER_FAILURE='SAVE_ORDER_FAILURE';
export function saveOrder(data) {
  return {
    type: SAVE_ORDER,
    promise: axios({
      url: 'http://backend.api.sudostickers.com/api/orders',
      method: 'POST',
      data,
      transformResponse: (data) => {
        return JSON.parse(data);
      }
    })
  };
}


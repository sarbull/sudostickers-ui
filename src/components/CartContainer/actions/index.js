import * as guId from 'guid';

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
export function saveOrder() {
  return {
    type: SAVE_ORDER
  };
}


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
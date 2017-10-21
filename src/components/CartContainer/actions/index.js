export const ADD_TO_CART='ADD_TO_CART';
export function addToCart(product) {
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
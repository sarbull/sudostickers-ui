export const INCREMENT='INCREMENT';
export function increment(value) {
  return {
    type: INCREMENT,
    value
  };
}

export const DECREMENT='DECREMENT';
export function decrement(value) {
  return {
    type: DECREMENT,
    value
  };
}
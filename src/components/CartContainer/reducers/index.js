import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions';

const mapper = {
  [ADD_TO_CART]: (state, { product }) => {
    return {
      ...state,
      items: [
        ...state.items,
        product
      ]
    };
  },
  [REMOVE_FROM_CART]: (state, { product }) => {
    const items = state.items.filter((p) => {
      return p.id === product.id;
    });

    return {
      ...state,
      items
    };
  },
};

const initialState = {
  items: []
};

export default function reducers(state = initialState, action) {
  return mapper[action.type] ? mapper[action.type](state, action) : state;
}
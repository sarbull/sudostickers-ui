import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  SAVE_ORDER
} from '../actions';


function checkItems(items) {
  if(items.length === 0) {
    items.push({
      id: 100,
      guid: 'guid',
      name: 'Transport',
      price: 15.5
    });
  }

  return items;
}


const mapper = {
  [ADD_TO_CART]: (state, { product }) => {
    const checked = checkItems(state.items);

    return {
      ...state,
      items: [
        ...checked,
        product
      ]
    };
  },
  [REMOVE_FROM_CART]: (state, { product }) => {
    const items = state.items.filter((p) => {
      return p.guid !== product.guid;
    });

    if(items.length === 1) {
      items.pop();
    }

    return {
      ...state,
      items
    };
  },
  [EMPTY_CART]: (state) => {
    return {
      ...state,
      items: []
    };
  },
  [SAVE_ORDER]: (state) => {


    return {
      ...state,
      order: {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        delivery: 'Fan Courier'
      },
      items: []
    };
  },
};

const initialState = {
  items: []
};

export default function reducers(state = initialState, action) {
  return mapper[action.type] ? mapper[action.type](state, action) : state;
}
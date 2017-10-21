import {
  UPDATE_FIELD
} from '../actions';

const mapper = {
  [UPDATE_FIELD]: (state, { field }) => {
    return {
      ...state,
      order: {
        ...state.order,
        ...field
      }
    };
  },
};

const initialState = {
  order: {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    delivery: 'Fan Courier'
  }
};

export default function reducers(state = initialState, action) {
  return mapper[action.type] ? mapper[action.type](state, action) : state;
}
import {
  INCREMENT,
  DECREMENT
} from '../actions/example';

const mapper = {
  [INCREMENT]: ( state = { error: { } }, { value }) => {
    value = value + 1;

    return {
      ...state,
      value
    };
  },
  [DECREMENT]: ( state = { error: { } }, { value }) => {
    value = value - 1;

    return {
      ...state,
      value
    };
  }
};

const initialState = {
  value: 0
};

export default function reducers(state = initialState, action) {
  return mapper[action.type] ? mapper[action.type](state, action) : state;
}
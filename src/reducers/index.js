import { combineReducers } from 'redux';
import incrementor from '../components/Incrementor/reducers';

const rootReducer = combineReducers({
  incrementor
});

export default rootReducer;
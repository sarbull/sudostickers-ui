import { combineReducers } from 'redux';
import increment from '../components/Increment/reducers';
import products from '../components/ProductsContainer/reducers';

const rootReducer = combineReducers({
  increment,
  products
});

export default rootReducer;
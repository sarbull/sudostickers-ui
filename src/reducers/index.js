import { combineReducers } from 'redux';
import increment from '../components/Increment/reducers';
import products from '../components/ProductsContainer/reducers';
import cart from '../components/CartContainer/reducers';

const rootReducer = combineReducers({
  increment,
  products,
  cart
});

export default rootReducer;
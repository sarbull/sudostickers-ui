import { combineReducers } from 'redux';
import increment from '../components/Increment/reducers';
import products from '../components/ProductsContainer/reducers';
import cart from '../components/CartContainer/reducers';
import order from '../components/CustomerContainer/reducers';

const rootReducer = combineReducers({
  increment,
  products,
  cart,
  order
});

export default rootReducer;
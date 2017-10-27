import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import * as CartActions from '../CartContainer/actions';
import Product from '../Product';

class ProductsContainer extends Component {
  renderProducts() {
    const {
      products,
      addToCart
    } = this.props;

    return products.map((product, index) => (
      <Product key={product.id}
               product={product}
               addToCart={addToCart}/>
    ));
  }

  render() {
    return (
      <div className="row">
          { this.renderProducts() }
      </div>
    );
  }
}

function mapStateToProps({products}, action) {
  return {
    products: products.list
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    ...Actions,
    ...CartActions
  };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

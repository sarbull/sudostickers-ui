import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import Product from '../Product';

class ProductsContainer extends Component {
  renderProducts() {
    const { products } = this.props;

    return products.map((product) => (
      <Product key={product.id} product={ product }/>
    ));
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <div>
          { this.renderProducts() }
        </div>
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
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <h1>Products Container</h1>
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

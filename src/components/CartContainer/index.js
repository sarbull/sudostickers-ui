import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import Cart from '../Cart';

class CartContainer extends Component {
  render() {
    const {
      items,
      removeFromCart
    } = this.props;

    return (
      <div>
        <h1>Cart</h1>
        <Cart items={items}
              removeFromCart={ removeFromCart }/>
      </div>
    );
  }
}

function mapStateToProps({ cart }) {
  return {
    items: cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
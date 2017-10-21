import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import Cart from '../Cart';
import CustomerContainer from "../CustomerContainer";
import Button from 'material-ui/Button';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder() {
    this.props.saveOrder();
  }

  render() {
    const {
      items,
      removeFromCart,
      emptyCart
    } = this.props;

    return (
      <div>
        <h1>Cart</h1>
        <Cart items={items}
              removeFromCart={ removeFromCart }
              emptyCart={ emptyCart }/>
        { (items.length > 0) && (<div>
            <CustomerContainer />

            <br/>
            <br/>

            <Button raised
                    color="primary"
                    style={{float: 'right'}}
                    onClick={() => {
                      this.submitOrder();
                    }}>
              Submit order
            </Button>
        </div>)}
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
import React, {Component} from 'react';
import About from '../About';
import Increment from '../Increment';
import Home from '../Home';
import CartContainer from '../CartContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  cartQty() {
    const { cart } = this.props;

    return cart.length;
  }

  render() {
    const { cart } = this.props;

    const length = cart.length;

    return (
      <Router>
        <div>
          <div>
            <h1>Sudo Stickers</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <Link to={'/cart'}>
              <span>
                Shopping Cart

                { (this.cartQty() > 0) && (<span style={{color: '#E53935'}}>
                  &nbsp;({ length })
                </span>)}
              </span>
            </Link>
          </div>

          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/increment" component={Increment}/>
            <Route path="/cart" component={CartContainer}/>
          </div>

          <p align="right">
            SUDOSTICKERS <small>(pre-alpha)</small> &copy; 2017
          </p>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({cart}) {
  return {
    cart: cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
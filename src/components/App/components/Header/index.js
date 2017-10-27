import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

class Header extends Component {
  cartQty() {
    const { cart } = this.props;

    return cart.length;
  }

  render() {
    const { cart } = this.props;

    return (
      <header className="masthead">
        <nav className="navbar navbar-expand-md navbar-light bg-light rounded mb-3">
          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">&nbsp;</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav text-md-center nav-justified w-100">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to={'/cart'} className="nav-link">
                        <span>
                          Shopping Cart
                          { (this.cartQty() > 0) && (<span style={{color: '#E53935'}}>
                            &nbsp;({ cart.length })
                          </span>)}
                        </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
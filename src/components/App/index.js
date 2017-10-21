import React, {Component} from 'react';
import About from '../About';
import Increment from '../Increment';
import Home from '../Home';
import CartContainer from '../CartContainer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
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
          <Grid container>
            <AppBar position="static" style={{ marginBottom: 40, backgroundColor: '#8BC34A' }}>
              <Grid container justify="center">
                <Grid item md={10}>
                  <Toolbar>
                    <Typography type="title" color="inherit">
                      Sudo Stickers
                    </Typography>

                    <Link to={"/"}>
                      <Button>Home</Button>
                    </Link>

                    <Link to={"/about"}>
                      <Button>About</Button>
                    </Link>

                    <Link to={"/cart"}>
                      <Button>
                        Shopping Cart

                        { (this.cartQty() > 0) && (<span style={{color: '#E53935'}}>
                          &nbsp;({ length })
                        </span>) }
                      </Button>
                    </Link>
                  </Toolbar>
                </Grid>
              </Grid>
            </AppBar>
          </Grid>

          <Grid container justify="center">
            <Grid item md={10} xs={12}>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/increment" component={Increment}/>
              <Route path="/cart" component={CartContainer}/>
            </Grid>

            <Grid item md={10} xs={12}>
              <p align="right">
                SUDOSTICKERS &copy; 2017
              </p>
            </Grid>
          </Grid>
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
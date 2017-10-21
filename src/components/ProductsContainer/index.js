import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import Product from '../Product';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class ProductsContainer extends Component {
  renderProducts() {
    const { products } = this.props;

    return products.map((product) => (
      <Grid item md={6} xs={12}>
        <Paper>
          <Product key={product.id} product={ product }/>
        </Paper>
      </Grid>
    ));
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <Grid container md={12} xs={12} justify="center">
          <Grid container md={8} xs={12} justify="center">
            { this.renderProducts() }
          </Grid>
        </Grid>
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

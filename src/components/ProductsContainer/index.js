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
      <Grid item md={3}>
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
        <div>
          <Grid container spacing={24}>
            { this.renderProducts() }
          </Grid>
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

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
      <Grid item xs={12} md={6} key={product.id}>
        <Paper>
          <Product product={ product }/>
        </Paper>
      </Grid>
    ));
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item md={10} xs={12}>
                <Grid container>
                { this.renderProducts() }
                </Grid>
              </Grid>
            </Grid>
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

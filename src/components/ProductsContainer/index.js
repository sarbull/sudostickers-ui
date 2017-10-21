import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import * as CartActions from '../CartContainer/actions';
import Product from '../Product';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class ProductsContainer extends Component {
  renderProducts() {
    const { products } = this.props;

    return products.map((product) => (
      <Grid item md={3} xs={12} key={product.id}>
        <Paper>
          <Product product={ product }
                   addToCart={ this.props.addToCart } />
        </Paper>
      </Grid>
    ));
  }

  render() {
    return (
      <div>
        <Grid container>
          { this.renderProducts() }
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
  const actions = {
    ...Actions,
    ...CartActions
  };

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

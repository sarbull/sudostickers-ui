import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';
import * as CartActions from '../CartContainer/actions';
import Product from '../Product';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';

class ProductsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      direction: null,
    };

    this.showSnackbar = this.showSnackbar.bind(this);
    this.hideSnackbar = this.hideSnackbar.bind(this);
  }

  showSnackbar(direction) {
    this.setState({ open: true, direction });
  }

  hideSnackbar() {
    this.setState({ open: false });
  }

  renderProducts() {
    const {
      products,
      addToCart
    } = this.props;

    return products.map((product) => (
      <Grid item md={3} xs={12} key={product.id}>
        <Paper>
          <Product product={ product }
                   addToCart={ addToCart }
                   showSnackbar={ this.showSnackbar }/>
        </Paper>
      </Grid>
    ));
  }

  render() {
    const { open, direction } = this.state;

    return (
      <div>
        <Grid container>
          { this.renderProducts() }
        </Grid>

        <Snackbar
          open={open}
          onRequestClose={this.hideSnackbar}
          transition={<Slide direction={direction} />}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Added to cart.</span>}
        />
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

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

    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  state = {
    open: false,
    direction: null,
  };

  handleClick(direction) {
    this.setState({ open: true, direction });

    console.log('called');
  }

  handleRequestClose() {
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
                   showSnackbar={ this.handleClick }/>
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

        <Snackbar
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={<Slide direction={this.state.direction} />}
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

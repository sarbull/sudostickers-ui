import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';

const styles = {
  media: {
    height: 200,
  },
};

class Product extends Component {
  showCurrency() {
    return !(typeof this.props.product.price === 'string');
  }

  hardcodedBg(product) {
    if (product.id !== 1) {
      return {
        backgroundSize: '45%'
      }
    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const {
      product,
      classes,
      addToCart,
      showSnackbar
    } = this.props;

    return (
      <div>
        <Card>
          <CardMedia
            className={classes.media}
            image={ product.defaultImage }
            title="Contemplative Reptile"
            style={ this.hardcodedBg(product) }
          />
          <CardContent>
            <Typography type="headline" component="h2">
              { product.name }
            </Typography>
            <Typography component="p">
              { product.description }
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              { product.price }
              { this.showCurrency() ? ' RON' : '' }
            </Button>
            {/*<Button dense*/}
                    {/*color="primary"*/}
                    {/*onClick={() => {*/}
                      {/*this.nextPath('/about');*/}
                    {/*}}>*/}
              {/*Details*/}
            {/*</Button>*/}
            <Button dense
                    color="primary"
                    onClick={ () => {
                      addToCart(product);

                      showSnackbar('up');
                    }}>
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Product));

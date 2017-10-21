import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  media: {
    height: 200,
  },
};

class Product extends Component {

  showCurrency() {
    return !(typeof this.props.product.price === 'string');
  }

  render() {
    const { product, classes } = this.props;

    return (
      <div>
        <Card>
          <CardMedia
            className={classes.media}
            image={ product.defaultImage }
            title="Contemplative Reptile"
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
            <Button dense color="primary">
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Product);

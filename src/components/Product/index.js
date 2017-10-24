import React, { Component } from 'react';

class Product extends Component {
  showCurrency() {
    return !(typeof this.props.product.price === 'string');
  }

  render() {
    const {
      product,
      addToCart
    } = this.props;

    return (
      <div>
        <div>
          <h1 type="headline" component="h2">
            { product.name }
          </h1>
          <p component="p">
            { product.description }
          </p>
        </div>
        <div>
          <span>
            { product.price }
            { this.showCurrency() ? ' RON' : '' }
          </span>
          <button onClick={ () => {
                    addToCart(product);
                  }}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

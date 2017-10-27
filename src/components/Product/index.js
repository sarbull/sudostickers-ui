import React, { Component } from 'react';

const background = (imageUrl) => {
  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40%',
    height: 250
  };
};

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
      <div className="col-md-4 mb-20">
        <div className="card">
          <div className="card-img-top" style={ background(product.defaultImage) }></div>
          <div className="card-body">
            <h4 className="card-title">
              { product.name }

              <span className="badge badge-light float-right">
                { product.price }
                { this.showCurrency() ? ' RON' : '' }
              </span>
            </h4>

            <p className="card-text">{ product.description }</p>

            <button className="btn btn-success btn-xs" onClick={ () => {
              addToCart(product);
            }}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

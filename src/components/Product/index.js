import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <h3>{ product.name }</h3>
      </div>
    );
  }
}

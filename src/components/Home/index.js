import React, { Component } from 'react';
import ProductsContainer from '../ProductsContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ProductsContainer />
      </div>
    );
  }
}

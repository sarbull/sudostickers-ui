import React, { Component } from 'react';
import About from '../../../About';
import Home from '../../../Home';
import CartContainer from '../../../CartContainer';
import {
 Route
} from 'react-router-dom';

class Body extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/cart" component={CartContainer}/>
        </div>
      </div>
    );
  }
}

export default Body;
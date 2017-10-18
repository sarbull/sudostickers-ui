import React, {Component} from 'react';
import About from '../About';
import Incrementor from '../Incrementor';
import Home from '../Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/incrementor">Incrementor</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/incrementor" component={Incrementor}/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, {Component} from 'react';
import About from '../About';
import Increment from '../Increment';
import Home from '../Home';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

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
          <Grid container>
            <AppBar position="static" style={{ marginBottom: 20 }}>
              <Grid container justify="center">
                <Grid item md={10}>
                  <Toolbar>
                    <Typography type="title" color="inherit">
                      sudostickers
                    </Typography>

                    <Button color="contrast">
                      <Link to="/">Home</Link>
                    </Button>
                    <Button color="contrast">
                      <Link to="/about">About</Link>
                    </Button>
                  </Toolbar>
                </Grid>
              </Grid>
            </AppBar>
          </Grid>

          <Grid container>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/increment" component={Increment}/>
          </Grid>

          <Grid container justify="center">
            <Grid item md={10}>
              <p align="right">
                SUDOSTICKERS &copy; 2017
              </p>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;

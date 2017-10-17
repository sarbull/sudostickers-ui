import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/example';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class App extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(this.props.value);
  }

  decrement() {
    this.props.decrement(this.props.value);
  }

  render() {
    const { value } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <h1>sudostickers, soon.</h1>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <h2>{ value }</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Button onClick={ this.increment }
                      raised
                      color="primary">
                Increment
              </Button>
            </Grid>

            <Grid item>
              <Button onClick={ this.decrement }
                      raised
                      color="accent">
                Decrement
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({example}, action) {
  return {
    value: example.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

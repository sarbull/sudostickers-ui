import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actions';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class Increment extends Component {
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
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <h2>{ value }</h2>
          </Grid>
        </Grid>
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
    );
  }
}

function mapStateToProps({increment}, action) {
  return {
    value: increment.value
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment);

import React, {Component} from 'react';
import Incrementor from '../Incrementor';
import Grid from 'material-ui/Grid';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <h1>sudostickers, soon.</h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Incrementor/>
        </Grid>
      </Grid>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import AboutContainer from '../AboutContainer';

export default class About extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h2>About</h2>
        <ul>
          <li>
            <Link to={`${match.url}/sarbull`}>
              Cezar Sirbu
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/pop`}>
              Popescu Florin
            </Link>
          </li>
        </ul>

        <Route path={`${ match.url }/:topicId`} component={AboutContainer} />

        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )} />
      </div>
    );
  }
}

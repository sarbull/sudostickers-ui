import React, { Component } from 'react';

export default class AboutContainer extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        { match.params.topicId === 'sarbull' && <h3>
          Hello sarbull
        </h3> }

        { match.params.topicId === 'pop' && <h3>
          Popescule
        </h3> }
      </div>
    );
  }
}

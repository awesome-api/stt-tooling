import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Output.css';

class Output extends Component {
  render() {
    const {
      results,
      isLoading,
      isLoaded
    } = this.props;

    const resultsList = results.map((result, i) => {
      return <li key={`transcript-${i}`}>
        {result.alternatives[0].transcript}
      </li>
    });

    let loadMessage = 'Upload a file to view the results';
    if (isLoading) {
      loadMessage = 'Loading your results...';
    }

    return (
      <div className="output">
        {
          (isLoading || !isLoaded) &&
          <p>{loadMessage}</p>
        }
        <ul>
          {resultsList}
        </ul>
      </div>
    );
  }
}

Output.propTypes = {
  results: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired
}

export default Output;

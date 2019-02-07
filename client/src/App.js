import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';

import CurrentClip from './components/containers/CurrentClip/CurrentClip';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips';

import './App.css';
import Output from './components/views/Output/Output';

class App extends Component {
  state = {
    results: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ results: JSON.parse(res.results) }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/api/recognize', {
      method: 'POST'
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    const transcript = this.state.results !== null ?
      this.state.results.results[0].alternatives[0].transcript
      : '';
    console.log();
    return (
      <Tile className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <CurrentClip />
            <Output />
            <YourClips />
          </div>
        </div>
        <p>{transcript}</p>
      </Tile>
    );
  }
}

export default App;

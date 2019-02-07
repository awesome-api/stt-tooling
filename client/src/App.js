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
    recognizedOutput: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ recognizedOutput: res.output }))
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
        <p>{this.state.recognizedOutput}</p>
      </Tile>
    );
  }
}

export default App;

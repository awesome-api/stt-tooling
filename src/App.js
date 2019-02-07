import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';

import PlayAudio from './components/containers/CurrentClip/PlayAudio';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips';

import './App.css';
import Output from './components/views/Output/Output';

class App extends Component {
  render() {
    return (
      <Tile className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
	   <div className="side-sontent">
            <PlayAudio />
           </div>
            <Output />
            <YourClips />
          </div>
        </div>
      </Tile>
    );
  }
}

export default App;

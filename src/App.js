import React, { Component } from 'react';

import CurrentClip from './components/containers/CurrentClip/CurrentClip';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <CurrentClip />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

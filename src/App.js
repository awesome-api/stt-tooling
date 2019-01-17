import React, { Component } from 'react';
import './App.css';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <YourClips />
      </div>
    );
  }
}

export default App;

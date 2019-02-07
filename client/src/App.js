import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import axios from 'axios';

import CurrentClip from './components/containers/CurrentClip/CurrentClip';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips';
import Output from './components/views/Output/Output';

import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      results: null,
      selectedFile: null
    };
  }

  handleButtonClicked =() => {
    if (this.state.selectedFile !== null) {
      console.log('submitting file');
      this.callAPI();
    } else {
      console.log('no file currently selected');
    }
  }

  callAPI = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('/api/recognize', { data })
      .then(res => {
        console.log('response:', res);
        this.setState({ results: res.data.results });
      }).catch(err => {
        console.log(err);
      })
  }

  handleSelectedFile = event => {
    console.log('selectedFile:', event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  handleUploadFile = file => {
    console.log('uploading file');
  }

  render() {
    const transcript = this.state.results !== null ?
      this.state.results.results[0].alternatives[0].transcript
      : '';
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
        <input type="file" onChange={this.handleSelectedFile} />
        <p>{transcript}</p>
        <button onClick={this.handleButtonClicked} >Upload</button>
      </Tile>
    );
  }
}

export default App;

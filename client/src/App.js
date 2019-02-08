import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import axios from 'axios';

import PlayAudio from './components/containers/PlayAudio/PlayAudio';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips';
import Output from './components/views/Output/Output';

import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      results: [],
      selectedFile: null,
      resultsLoading: false,
      resultsLoaded: false
    };
  }

  handleFileSelected = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  handleUpload = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name);

    axios.post('http://localhost:4000/api/recognize', data).then(res => {
      this.setState({
        results: res.data.results.results,
        resultsLoading: false,
        resultsLoaded: true
      })
    });

    this.setState({
      resultsLoading: true,
      resultsLoaded: false
    });
  }

  render() {
    const {
      results,
      resultsLoaded,
      resultsLoading
    } = this.state;

    return (
      <Tile className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <div className="temp_file_uploader">
              <input type="file" onChange={this.handleFileSelected} />
              <button
                className="upload-btn"
                onClick={this.handleUpload}
              >
                Upload
              </button>
            </div>
            <div className="side-sontent">
              <PlayAudio />
            </div>
            <Output
              results={results}
              isLoading={resultsLoading}
              isLoaded={resultsLoaded}
            />
            <YourClips />
          </div>
        </div>
      </Tile>
    );
  }
}

export default App;

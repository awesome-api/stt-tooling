import React, { Component } from 'react';
import { Tile, Button, TextInput } from 'carbon-components-react';
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
      files: [],
      selectedFile: null,
      resultsLoading: false,
      resultsLoaded: false,
      keywords: []
    };
  }

  addFile = file => {
    let filesArray = this.state.files;

    filesArray.unshift(file);

    this.setState({
      filesArray,
      selectedFile: file
    });
  }

  updateSelectedFile = index => {
    this.setState({
      selectedFile: this.state.files[index]
    });
  }

 cancelSelectedFile=(files) => {
    this.setState({
      selectedFile : null
    });
  }

  handleUpload = () => {
    if (this.state.selectedFile !== null) {
      const data = new FormData();
      data.append('file', this.state.selectedFile, this.state.selectedFile.name);
      data.append('keywords', JSON.stringify(this.state.keywords));
  
      axios.post('http://localhost:4000/api/recognize', data).then(res => {
        // console.log('results[0]:', res.data.results.results[0]);
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
    } else {
      console.log('No file selected. Cannot upload.');
    }
  }

  onKeywordsChange = (e) => {
    let keywords = e.target.value.split(',');
    this.setState({
      keywords: keywords
    });
  }

  render() {
    const {
      results,
      resultsLoaded,
      resultsLoading,
      selectedFile,
      files
    } = this.state;

    return (
      <Tile className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <PlayAudio file={selectedFile} />
            <div className="temp_file_uploader">
              <Button
                className="upload-btn"
                onClick={this.handleUpload}
              >
                Recognize Audio
              </Button>
              <TextInput
                id='keywords-input'
                labelText='Keywords'
                placeholder='Keywords, separated by commas'
                onChange={this.onKeywordsChange}
              />
            </div>
            <Output
              results={results}
              isLoading={resultsLoading}
              isLoaded={resultsLoaded}
            />
            <YourClips
              selectedFile={selectedFile}
              files={files}
              updateSelectedFile={this.updateSelectedFile} 
              cancelSelectedFile={this.cancelSelcetedFile}
              addFile={this.addFile}
            />
          </div>
        </div>
      </Tile>
    );
  }
}

export default App;

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
      results: null,
      selectedFile: null
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
      console.log(res.statusText);
    });
  }

  // callAPI = () => {
  //   //TODO: delete interceptor
  //   axios.interceptors.request.use(request => {
  //     console.log('Starting Request', request)
  //     return request
  //   });

  //   let testData = new FormData();
  //   testData.append('somekey', 'someValue');
  //   axios({
  //     url: 'http://localhost:4000/api/recognize',
  //     method: 'POST',
  //     name: 'Noah Eigenfeld',
  //     config: { headers: {'Content-Type': 'multipart/form-data' }},
  //     testData
  //   });

  //   // for (var value of testData.values()) {
  //   //   console.log(value); 
  //   // }

  //   console.log(this.state.selectedFile.name);

  //   let data = new FormData();
  //   data.append('file', this.state.selectedFile, this.state.selectedFile.name);
  //   for (var value of data.values()) {
  //     console.log('value:', value);
  //   }
  //   axios.post('http://localhost:4000/api/recognize', {
  //     // axios.post('http://localhost:4000/upload', {
  //     data: data,
  //     name: 'name'
  //   }).then(res => {
  //       console.log('response:', res);
  //       this.setState({ results: res.data.results });
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }

  // handleSelectedFile = event => {
  //   console.log('selectedFile:', event.target.files[0]);
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   });
  // }

  render() {
    const transcript = this.state.results !== null ?
      this.state.results.results[0].alternatives[0].transcript
      : '';
    return (
      <Tile className="app">
        <Header />
        <div className="content">
          <input type="file" onChange={this.handleFileSelected} />
          <button onClick={this.handleUpload} >Upload</button>
          <Sidebar />
          <div className="main-content">
            <div className="side-sontent">
              <PlayAudio />
            </div>
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

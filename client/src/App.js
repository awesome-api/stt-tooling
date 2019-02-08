import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';

import PlayAudio from './components/containers/PlayAudio/PlayAudio';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips';

import './App.css';
import Output from './components/views/Output/Output';

class App extends Component {
  state = {
    selectedFile: null
  };

  updateSelectedFile=(files) => {
     this.setState({
	selectedFile : files[0]
	});
}

  cancelSelectedFile=(files) => {
     this.setState({
	selectedFile : null
	});
}

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
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
            <PlayAudio file={this.state.selectedFile}  />
            <Output />
            <YourClips 
		updateSelectedFile={this.updatedSelectedFile} 
		cancelSelectedFile={this.cancelSelcetedFile}
		/>
          </div>
        </div>
        <p>{this.state.data}</p>
      </Tile>
    );
  }
}

export default App;

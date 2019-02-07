import React, { Component } from 'react';
import { Tile, Button } from 'carbon-components-react';
// import { SpeechToTextV1 } from 'watson-developer-cloud/speech-to-text/v1';
// import fs from 'fs';
// import { CombinedStream } from 'combined-stream';

import CurrentClip from './components/containers/CurrentClip/CurrentClip';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips'

import './App.css';
import Output from './components/views/Output/Output';

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var CombinedStream = require('combined-stream');
var fs = require('fs');

class App extends Component {
  runThisIsh = () => {
    console.log('running this ish');
    
    var speechToText = new SpeechToTextV1({
      //Elizabeth's creds
      url: 'https://stream.watsonplatform.net/speech-to-text/api/',
      username: '',
      password: ''
      });
    
    var combinedStream = CombinedStream.create();
    combinedStream.append(fs.createReadStream('./sample_audio.mp3'));
    
    var recognizeParams = {
      audio: combinedStream,
      content_type: 'audio/mp3',
      timestamps: true,
      word_alternatives_threshold: 0.9,
      keywords: ['sample', 'tornado', 'tornadoes'],
      keywords_threshold: 0.5
    };

    speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
      if (error) {
        console.log(error);
      } else {
        console.log(JSON.stringify(speechRecognitionResults, null, 2));
      }
    });
  }

  uploadFile = (file) => {
    console.log('uploading file:', file);

    var username = 'b623b502-7d64-49f4-ac72-fe2d5bb20ce8';
    var password = 'YKYCV13yiHIP';

    // var token = {authentication-token};
    // var wsURI = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize'
    //   + '?user=' + IAM_access_token;
    // var websocket = new WebSocket(wsURI);
    
    // websocket.send(JSON.stringify({
    //   action: 'start',
    //   content-type: 'audio/mp3'
    // }));
    // websocket.send(file);
    // websocket.send(JSON.stringify({action: 'stop'}));
    
  }

  handleFileChange = (e) => {
    console.log('handling change');
    console.log('file:', e.target.files[0]);
    let file = e.target.files[0];
    this.uploadFile(file);
  }

  render() {
    return (
      <Tile className="app">
        <Header />
        <Button onClick={this.runThisIsh}>Run against API</Button>
        <input
          type="file"
          onChange={this.handleFileChange}
        />
        <div className="content">
          <Sidebar />
          <div className="main-content">
            <CurrentClip />
            <Output />
            <YourClips />
          </div>
        </div>
      </Tile>
    );
  }
}

export default App;

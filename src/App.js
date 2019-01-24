import React, { Component } from 'react';
import { Tile, Button } from 'carbon-components-react';
import SpeechToTextV1 from 'watson-developer-cloud/speech-to-text/v1';
import fs from 'fs';
import CombinedStream from 'combined-stream';

import CurrentClip from './components/containers/CurrentClip/CurrentClip';
import Header from './components/views/Header/Header';
import Sidebar from './components/containers/Sidebar/Sidebar';
import YourClips from './components/containers/YourClips/YourClips'

import './App.css';
import Output from './components/views/Output/Output';

class App extends Component {
  runThisIsh = () => {
    console.log('running this ish');
    
    var speechToText = new SpeechToTextV1({
      //Elizabeth's creds
      url: 'https://stream.watsonplatform.net/speech-to-text/api',
      username: 'b623b502-7d64-49f4-ac72-fe2d5bb20ce8',
      password: 'YKYCV13yiHIP'
      });
    
    // var combinedStream = CombinedStream.create();
    // combinedStream.append(fs.createReadStream('audio-file1.flac'));
    // combinedStream.append(fs.createReadStream('audio-file2.flac'));
    
    // var recognizeParams = {
    //   audio: combinedStream,
    //   content_type: 'audio/flac',
    //   timestamps: true,
    //   word_alternatives_threshold: 0.9,
    //   keywords: ['colorado', 'tornado', 'tornadoes'],
    //   keywords_threshold: 0.5
    // };

    // speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(JSON.stringify(speechRecognitionResults, null, 2));
    //   }
    // });
  }

  render() {
    return (
      <Tile className="app">
        <Header />
        <Button onClick={this.runThisIsh}>Run against API</Button>
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

import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import mp3_file from './rememberthetime.mp3';

class PlayAudio extends Component {
  render(){
    return (
      <ReactAudioPlayer src={mp3_file} autoplay controls />
    );
  }
}

export default PlayAudio;

import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import mp3_file from './rememberthetime.mp3';
import PropTypes from 'prop-types'; 

class PlayAudio extends Component {
  render(){
    return (
      <ReactAudioPlayer src={this.props.file} autoplay controls />
    );
  }
}

PlayAudio.propTypes = {
 file: PropTypes.object
}

export default PlayAudio;

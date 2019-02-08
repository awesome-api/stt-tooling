import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types'; 

class PlayAudio extends Component {
  render(){
    let filename = 'no file selected';
    let fileURL = '';

    if (this.props.file !== null) {
      filename = `"${this.props.file.name}"`;
      fileURL = URL.createObjectURL(this.props.file);
    }

    return (
      <div>
        <p>Current Audio File: {filename}</p>
        <ReactAudioPlayer src={fileURL} autoplay controls />
      </div>
    );
  }
}

PlayAudio.propTypes = {
 file: PropTypes.object
}

export default PlayAudio;

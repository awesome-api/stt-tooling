import React, { Component } from 'react';
import './YourClips.css';
import downloadcloud from '../../../images/cloud-upload-2.png';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import mp3_file from '../../../images/mp3_file.png';

class YourClips extends Component {

  handleOnDrop = files => {
    this.props.addFile(files[0]);
  }

  render() {
    const {
      selectedFile,
      files
    } = this.props;

    const clips = files.map((file, i) => {
      return (<div key={`clip-${i}`} className={'clip-list-item'} >
        <img src={mp3_file} />
        <h4>{file.name}</h4>
      </div>);
    });

    return (
      <div>
        <div className="file-upload-class">
          <div className="top-half">
            <h2>Your Clips</h2>
            <div className="clips-list">
              {clips}
            </div>
          </div>
          <div className="bottom-half">
            <Dropzone
              onDrop = { this.handleOnDrop }
              onFileDialogCancel = { this.props.cancelSelectedFile }
            >
              {
                ({ getRootProps, getInputProps }) => (
                  <div className="dropzone" {...getRootProps() }>
                    <input {...getInputProps() }/>
                    <img src = {downloadcloud} alt="TEST.mp3"/>
                    <p>Drop files here, or click for file selection.</p> 
                  </div>
                )
              }
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

YourClips.propTypes = {
  selectedFile: PropTypes.object,
  files: PropTypes.array,
  updateSelectedFile : PropTypes.func,
  cancelSelectedFile : PropTypes.func,
  addFile: PropTypes.func
}

export default YourClips;

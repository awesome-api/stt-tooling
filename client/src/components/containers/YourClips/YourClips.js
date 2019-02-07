import React, { Component } from 'react';
import './YourClips.css';
import downloadcloud from '../../../images/cloud-upload-2.png';
import Dropzone from 'react-dropzone';

class YourClips extends Component {
  constructor() {
    super()
    this.state = {
        files: []
    }
  }

  onDrop(files) {
    this.setState({ files });
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  render() {
    const files = this.state.files.map(file => ( 
      <li key = { file.name }> 
        { file.name } - { file.size } bytes 
        </li>
      ));
    
    return (
      <div>
        <div className="FileUploadClass">
          <h3>Your Clips</h3>
          <div>
            <hr/>
          </div>
          <section>
            <aside>
              <h4>Files</h4> 
              <ul>{files}</ul> 
            </aside> 
            <Dropzone
              onDrop = { this.onDrop.bind(this) }
              onFileDialogCancel = { this.onCancel.bind(this) }
            >
              {
                ({ getRootProps, getInputProps }) => (
                  <div {...getRootProps() }>
                    <input {...getInputProps() }/>
                    <button type = "custom-btn">
                    <img src = {downloadcloud} alt="TEST.mp3"/>
                    </button>
                    <p>Drop files here, or click for file selection.</p> 
                  </div>
                )
              }
            </Dropzone>
          </section>
        </div>
      </div>
    );
  }
}

export default YourClips;

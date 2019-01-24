import React, { Component } from 'react';
import './YourClips.css';
import downloadcloud from '../../../images/cloud-upload-2.png';
import mp3file from '../../../images/mp3_file.png';
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
        <div class="FileUploadClass">
          <h3>Your Clips</h3>
            <div>
              <div class="images">
                  <img
                    src={mp3file}
                    alt={'could not load'}
                  />
                  <h5>TEST.mp3</h5>
              </div>
              <hr/>
              <button type = "custom-btn">
                <img src ={downloadcloud} alt="TEST.mp3"/> 
              </button>
              <span id ="custom-text">No file uploaded</span>
              <h4>Drag and Drop to Upload Clips</h4>
            </div>
        </div>
        <section>
          <Dropzone
            onDrop = { this.onDrop.bind(this) }
            onFileDialogCancel = { this.onCancel.bind(this) }
          >
            {
              ({ getRootProps, getInputProps }) => (
                <div {...getRootProps() }>
                  <input {...getInputProps() }/>
                  <p>Drop files here, or click for file selection.</p> 
                </div>
              )
            } 
          </Dropzone>
          <aside>
            <h4>Files</h4> 
            <ul>{files}</ul> 
          </aside> 
        </section> 
      </div>
    );
  }
}

export default YourClips;

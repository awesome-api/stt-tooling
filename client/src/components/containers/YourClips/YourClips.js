import React, { Component } from 'react';
import './YourClips.css';
import downloadcloud from '../../../images/cloud-upload-2.png';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

class YourClips extends Component {

  render() {
    return (
      <div>
        <div className="file-upload-class">
          <h3>Your Clips</h3>
          <div>
            <hr/>
          </div>
          <section>
            <aside>
              <h4>Files</h4>
              <ul>
		{ this.props.file &&
		  <li key ={this.props.file.name}>
		    {this.props.file.name} - {this.props.file.size} bytes 
		  </li>
		}
	      </ul>   
            </aside> 
            <Dropzone
              onDrop = { this.props.updateSelectedFile }
              onFileDialogCancel = { this.props.cancelSelectedFile }
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

YourClips.propTypes = {
  file: PropTypes.object,
  updateSelectedFile : PropTypes.func,
  cancelSelectedFile : PropTypes.func
}

export default YourClips;

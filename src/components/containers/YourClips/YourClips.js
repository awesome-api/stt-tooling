import React, { Component } from 'react';
import './YourClips.css';
import downloadcloud from '/stt-tooling/public/Images_Folder'
import mp3file from '/stt-tooling/public/mp3_file.png'

class YourClips extends Component {
  render() {
    return (
      <div>
        <h3>Your Clips</h3>
          <p>
            <div class="images">
                <img src={mp3file}/>
                  <h5>TEST.mp3</h5>
            </div><hr/>
              <button type = "custom-btn">
                <img src ={downloadcloud} alt="TEST.mp3"/> 
              </button>
              <span id ="custom-text">No file uploaded</span>
              <h4>Drag and Drop to Upload Clips</h4>
          </p>
      </div>
    );
  }
}

export default YourClips;

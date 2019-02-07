import React, { Component } from 'react';

import './Sidebar.css';
import github from '../../../images/github.png';
import info from '../../../images/blueinfo.png';
import youtube from '../../../images/youtube.png';
import bluedocumentation from '../../../images/bluedocumentation.png';
import purple from '../../../images/Purple.png';


class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className="IconSizes">
        <a href="https://github.com/awesome-api/stt-tooling">
          <button><img src = {github}/>GitHub</button>
        </a>
        <a href="https://github.com/awesome-api/stt-tooling/wiki">
          <button><img src = {bluedocumentation}/>Documentation</button>
        </a>
        <a href="https://www.youtube.com/">
          <button><img src = {purple}/>Video Tutorials</button>
        </a>
        <a href="https://github.com/awesome-api/stt-tooling/blob/master/README.md">
          <button><img src = {info}/>Contact Us</button>
        </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;

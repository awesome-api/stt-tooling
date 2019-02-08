import React, { Component } from 'react';

import github from '../../../images/github.png';
import info from '../../../images/greeninfo.png';
import bluedocumentation from '../../../images/bluedocumentation.png';
import purple from '../../../images/Purple.png';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className="IconSizes">
          <a className="bottom-border" href="https://github.com/awesome-api/stt-tooling">
            <img src = {github} alt={'failed to load'} />
            <p>GitHub</p>
          </a>
          <a className="bottom-border" href="https://github.com/awesome-api/stt-tooling/wiki">
            <img src = {bluedocumentation} alt={'failed to load'}/>
            <p>Documentation</p>
          </a>
          <a className="bottom-border" href="https://www.youtube.com/watch?v=OTzveEx-rQw">
            <img src = {purple} alt={'failed to load'}/>
            <p>Video Tutorials</p>
          </a>
          <a href="https://github.com/awesome-api/stt-tooling/blob/master/README.md">
            <img src = {info} alt={'failed to load'}/>
            <p>Contact Us</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;

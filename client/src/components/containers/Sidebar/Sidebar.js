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
          <a href="https://github.com/awesome-api/stt-tooling">
            <button>
              <img src = {github} alt={'failed to load'} />
              <p>GitHub</p>
            </button>
          </a>
          <a href="https://github.com/awesome-api/stt-tooling/wiki">
            <button>
              <img src = {bluedocumentation} alt={'failed to load'}/>
              <p>Documentation</p>
            </button>
          </a>
          <a href="https://www.youtube.com/watch?v=OTzveEx-rQw">
            <button>
              <img src = {purple} alt={'failed to load'}/>
              <p>Video Tutorials</p>
            </button>
          </a>
          <a href="https://github.com/awesome-api/stt-tooling/blob/master/README.md">
            <button>
              <img src = {info} alt={'failed to load'}/>
              <p>Contact Us</p>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;

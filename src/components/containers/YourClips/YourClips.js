import React, { Component } from 'react';
import './YourClips.css';
import Dropzone from 'react-dropzone';

class YourClips extends React.Component {
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
        ))
        return ( <section>
            <Dropzone>
            onDrop = { this.onDrop.bind(this) }
            onFileDialogCancel = { this.onCancel.bind(this) } >
            {
                ({ getRootProps, getInputProps }) => ( 
                  <div {...getRootProps() }>
                    <
                    input {...getInputProps() }
                    /> <
                    p > Drop files here, or click
                    for file selection </p> 
                  </div>
                )
            } 
            </Dropzone> 
            <aside>
              <h4> Files </h4> 
              <ul> {files} </ul> 
            </aside> 
          </section> 
        );
    }
}

export default YourClips;


'use strict';
/**@module Output
  *@description Creates the output in the terminal based on the command
  */


  import React, {Component} from 'react';

  class Output extends Component {

    /** TO-DO: abstract the cmdLine class
      *
      */
    render() {
      return (
        <output>
          <input value="Welcome to Sonic Pi Reader v1.0.0" readOnly/>
          <input value ="To view saved files: type 'ls' or 'dir'" readOnly/>
          <input value ="To edit a saved file in the code editor below: type 'load [fileName]'" readOnly/>
          <input value ="For example, 'load my_song_1'" readOnly/>
          <div className ="input-line">
            <div className ="prompt">$<input className = "cmdLine" autoFocus/></div>
          </div>
        </output>
        );
    }

  }

  export default Output;
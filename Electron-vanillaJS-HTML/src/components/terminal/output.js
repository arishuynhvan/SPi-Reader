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
        <div id ="intro">
          <input className="mousetrap"
          value="Welcome to Sonic Pi Reader v1.0.0" readOnly/>
          <input className="mousetrap"
          value ="To view saved files: type 'ls' or 'dir'" readOnly/>
          <input className="mousetrap"
          value ="To edit a saved file in the code editor below: type 'load [fileName]'" readOnly/>
          <input className="mousetrap"
          value ="For example, 'load my_song_1'" readOnly/>
          </div>
          <div className ="input-line">
            <div className ="prompt">$>
            <input className="mousetrap"
            className = "cmdLine" autoFocus/></div>
          </div>
        </output>
        );
    }

  }

  export default Output;
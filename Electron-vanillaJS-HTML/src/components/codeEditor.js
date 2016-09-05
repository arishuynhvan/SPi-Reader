'use strict';
/**@module Code Editor
  *@description Users interact with Sonic Pi Code here
  */


import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var fieldStyle={
      width: "95%",
      margin: "20px"
    };

var labelStyle={
  fontSize: "30px",
  top:"15px"
}

  class CodeEditor extends Component {

    /** TO-DO:
      *  1. refactor Buttons over here for simpler state management +> delete code folder
      *  2. Implement the save function here
      *  3. Shortcut keys for saving?
      */
    render() {
      return (
        <div>
        <TextField className="mousetrap" id="code" multiLine={true}
        style={fieldStyle} rowsMax={15} floatingLabelText="Code Editor"
        floatingLabelStyle={labelStyle}>
        </TextField>
         <RaisedButton
          label="Save"
          className="btns"
          primary={true}
          onClick={}/>
          <RaisedButton
          label="Play"
          className="btns"
          primary={true}/>
          <RaisedButton
          label="Switch to terminal"
          className="btns"
          primary={true}/>
        </div>
        );
    }

  }

  export default CodeEditor;
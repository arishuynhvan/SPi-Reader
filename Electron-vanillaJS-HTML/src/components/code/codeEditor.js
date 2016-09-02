'use strict';
/**@module Code Editor
  *@description Users interact with Sonic Pi Code here
  */


import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

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
      *
      */
    render() {
      return (
        <TextField className="mousetrap" id="code" multiLine={true}
        style={fieldStyle} rowsMax={15} floatingLabelText="Code Editor"
        floatingLabelStyle={labelStyle}>
        </TextField>
        );
    }

  }

  export default CodeEditor;
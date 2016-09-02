'use strict';
/**@module Code Editor
  *@description Users interact with Sonic Pi Code here
  */


import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

var fieldStyle={
      width: "80%",
      margin: "20px"
    };

  class CodeEditor extends Component {

    /** TO-DO:
      *
      */
    render() {
      return (
        <TextField className="mousetrap" id="code" multiLine={true}
        style={fieldStyle}>
        </TextField>
        );
    }

  }

  export default CodeEditor;
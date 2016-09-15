'use strict';
/**@module Code Editor
  *@description Users interact with Sonic Pi Code here
  */


  import React, {Component} from 'react';
  import TextField from 'material-ui/TextField';
  import RaisedButton from 'material-ui/RaisedButton';
  //const fs = require('fs');

  var fieldStyle={
    width: "95%",
    margin: "20px"
  };

  var labelStyle={
    fontSize: "30px",
    top:"15px"
  }

  class CodeEditor extends Component {
    constructor(props) {
     super(props);
     this.state = {
      text:''
    };
  }
    /** TO-DO:
      *  1. refactor Buttons over here for simpler state management +> delete code folder
      *  2. Implement the save function here
      *  3. Shortcut keys for saving?
      */
      //state ={text:''};
      handleCodeChange = e => this.setState({text: e.target.value});

      saveCode =()=>{
        //this.setState({text: document.getElementById("code").value});
        var code =this.state.text;
        // var json = JSON.stringify([{file0: code}]);
        // //console.log(json);
        // //var encoded=btoa(json);
        // fs.writeFile('file0.json', json,'utf8',function callback(err,data){
        //   if(err)
        //     console.log(err);
        //   else
        //     console.log('finished writing file');
        // })
      };
      //change = ev => this.setState({text: ev.target.value});



      render() {
        return (
          <div>
          <TextField className="mousetrap" id="code" multiLine={true}
          style={fieldStyle} rowsMax={15} floatingLabelText="Code Editor"
          floatingLabelStyle={labelStyle}
          onChange={this.handleCodeChange}>
          </TextField>
          <RaisedButton
          label="Save"
          className="btns"
          primary={true}
          onClick={this.saveCode}/>
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
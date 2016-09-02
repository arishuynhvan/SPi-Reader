'use strict';
/**@module Control Buttons
  *@description Users interact with Sonic Pi Code here
  */


import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';



  class ControlButtons extends Component {

    /** TO-DO:
      *
      */
    render() {
      return (
        <div >
        <RaisedButton
        label="Save"
        className="btns"
            secondary={true}/>
        <RaisedButton
        label="Play"
        className="btns"
            secondary={true}/>
            <RaisedButton
        label="Switch to terminal"
            className="btns"
            secondary={true}/>
        </div>
        );
    }

  }

  export default ControlButtons;

// <input class="mousetrap" id="save" type="button" value="Save" onclick="" style="width: 50px; height: 30px; margin: 20px"/>

//         <input class="mousetrap" id="load" type="button" value="Load" style="width: 50px; height: 30px; margin: 20px;" onclick=""/>
//             <input class="mousetrap" id="play" type="button" value="Play" onclick="saveCode()" style="width: 50px; height: 30px;"/>

/**@module*/
// Functions associated with forms and buttons on index.html are defined here.
var shortcut=require('./mousetrap.js');
var synth = window.speechSynthesis;

// Server side
var OSName = determineOS();
var storeCode;

const STOP_ARG = 'stop-all-jobs';
const START_RECORDING_ARG = 'start-recording';
const STOP_RECORDING_ARG = 'stop-recording';

if('speechSynthesis' in window){

	console.log('there is speechSynthesis');
	shortcut.bind('mod+shift', function(e){speechControl(e)});
}
else
	alert("This window doesn't support Speech Synthesis API");

	function determineOS() {
		OSName = navigator.platform;
		console.log('running on: ' + OSName);

		if (navigator.appVersion.indexOf("Win")!= -1) OSName="Win";
		if (navigator.appVersion.indexOf("Mac")!= -1) OSName="Mac";
		if (navigator.appVersion.indexOf("X11")!= -1) OSName="Unix";
		if (navigator.appVersion.indexOf("Linux")!= -1) OSName="Linux";

		return OSName;
	}

	/** This function will extract the input from the start to the end of the line where the cursor is
  	* Todo: limits the return string to have 300 or lesscharacters
  	* It replaces symbols with their English texts
  	* @param: input
  	*/

  	function parseSpeech(input){
  		var parsedSpeech=input;

  		var specialChar=[".","(",")",":", ";",
  		"{", "}", "$", "?",
  		"!", "<", ">", "=", "\\", "/"];

  		var spellOut=[" dot ", " left bracket ", " right bracket ", " colon ", " semi-colon ",
  		" left curly bracket ", " right curly bracket ", " dollar sign ", " question mark ",
  		" exclamation mark ", " less than ", " more than ", " is ", " slash ", " backslash "];

  		specialChar.map(function(char,idx){
  			var delimStart=parsedSpeech.indexOf(char);
  			while(delimStart>-1){
  				if(char == "!" && parsedSpeech[delimStart+1] == "="){
  					console.log(parsedSpeech.substr(delimStart, 2));
  					parsedSpeech=parsedSpeech.replace(parsedSpeech.substr(delimStart, 2)," not equal to ");
  				}else if(char === "=" && parsedSpeech[delimStart+1] === "="){
  					var length = (parsedSpeech.indexOf("=",delimStart+2) === delimStart+2)? 3:2;
  					console.log(parsedSpeech.substr(delimStart, length));
  					parsedSpeech=parsedSpeech.replace(parsedSpeech.substr(delimStart, length)," equal to ");
  				}
  				else parsedSpeech=parsedSpeech.replace(char,spellOut[idx]);
  				delimStart=parsedSpeech.indexOf(char);
  			}
  		});

  		//console.log(parsedSpeech);
  		return parsedSpeech;
  	}


	/** Turns on or off text-to-speech feature
	  * @param: event
	  */
	  function speechControl(e){
	  	//console.log('play/pause');
	  	if(synth.speaking){
	  		synth.pause();
	  		synth.cancel();
	  	}
	  	else{
	  		console.log('preparing speech');
	  		input = parseSpeech(document.activeElement.value);
	  		console.log(input);
	  		speech = new SpeechSynthesisUtterance(input);
	  		console.log('speaking');
	  		synth.speak(speech);
	  		return false;
	  	}
	  }

		/**Store the value in the text area, which is the input from the user, into a variable
		*/
	function saveCode(){
    //Store the value in the text-field, which is the input from the user, into a variable
    	storeCode = document.getElementById('code').value;
    	console.log('saveCode() called');
    	console.log(storeCode);
	}

	function formatCommands(storeCode) {
		var newCode = storeCode.replace(new RegExp( "\n", "g" ), "; ");
		newCode = newCode.replace("do", "{");
		newCode = newCode.replace("end", "}");

		console.log("new code: "+newCode);
		newCode = "\"" + newCode + "\"";

		return newCode;
	}

	function OSBasedClientCommand() {
		var clientCommand;
		switch(OSName) {
			case 'Win': clientCommand = 'client\\SPi-reader.rb '; break;
			case 'Mac': clientCommand = './client/SPi-reader.rb '; break;
			default: clientCommand = './client/SPi-reader.rb '; // Probably the same for Unix and Linux
		}
		return clientCommand;
	}

	function sendServer(storeCode) {
		if(storeCode == null) {
			console.log('buffer is empty');
			return;
		}

		var code = formatCommands(storeCode);
		console.log('playing: ' + code);

		var clientCommand = OSBasedClientCommand();
		var exec = require('child_process').exec, child;

		child = exec(clientCommand + code,
			function (error, stdout, stderr) {
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			}
		);
	}

	function play() {
		saveCode();
		sendServer(storeCode);
	}

	function startRecording() {
		sendServer(START_RECORDING_ARG);
	}

	function stopRecording() {
		sendServer(STOP_RECORDING_ARG);
	}

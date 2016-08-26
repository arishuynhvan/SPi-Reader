/**@module*/
// Functions associated with forms and buttons on index.html are defined here.
var shortcut=require('./mousetrap.js');


var synth = window.speechSynthesis;
var storeCode;
var isPaused=true;
if('speechSynthesis' in window){

	console.log('there is speechSynthesis');
	shortcut.bind('mod+alt', function(e){speechControl(e)});
}
else
	alert("This window doesn't support Speech Synthesis API");

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

  		var spellOut=[" period ", " left bracket ", " right bracket ", " colon ", " semi-colon ",
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

  		console.log(parsedSpeech);
  		return parsedSpeech;
  	}


	/** Turns on or off text-to-speech feature
	  * @param: event
	  */
	  function speechControl(e){
	  	console.log('play/pause');
	  	if(!isPaused){
	  		isPause=false;
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
    	var storeCode = document.getElementById('code').value;
    	console.log('saveCode() called');
    	console.log(storeCode);
		// Functions associated with forms and buttons on index.html are defined here.
		sendServer(storeCode);
	}


	function formatCommands(storeCode) {
		var newCode = storeCode.replace(new RegExp( "\\n", "g" ), "; ");
		newCode = "\"" + storeCode + "\"";
		return newCode
	}

	function sendServer(storeCode) {
		if(storeCode == null) {
			console.log('buffer is empty');
			return;
		}

		storeCode = formatCommands(storeCode);

		console.log('playing: ' + storeCode);
		var exec = require('child_process').exec, child;

		child = exec('./client/SPi-reader.rb ' + storeCode,
			function (error, stdout, stderr) {
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
				if (error !== null) {
					console.log('exec error: ' + error);
				}

			});
	}


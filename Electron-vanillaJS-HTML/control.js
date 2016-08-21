var shortcut=require('./mousetrap.js');

function control(){
	var synth = window.speechSynthesis;
	var storeCode;
	var isPaused=true;
	if('speechSynthesis' in window){

		console.log('there is speechSynthesis');
		shortcut.bind('ctrl+alt', function(e){speechControl(e)});
	}
	else
		alert("This window doesn't support Speech Synthesis API");

/**This function will extract the input from the start to the end of the line where the cursor is
	Also it limits the return string to have 300 or lesscharacters
	It replaces symbols with their English texts
	@param: input
	*/
	function parseSpeech(input){
		var parsedSpeech;

		return parsedSpeech; 
	}

/** Turns on or off text-to-speech feature
	@param: event
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
		input = document.activeElement.value;//document.getElementById("code").value;
		speech = new SpeechSynthesisUtterance(input);
		console.log('speaking');
		synth.speak(speech);
    	//synth.resume();
	    	return false;
    	}
	}
  	
  	/**Store the value in the text area, which is the input from the user, into a variable
  	*/  
    function saveCode(){
    
	storeCode = document.getElementById('text_field').value;
	
	/*if(storeCode.length!==0){
		storeNode = document.createTextNode(storeCode);
		document.getElementById('buffer1').appendChild(storeNode);
		} */
	}

	/**Send the input text to the OSC server to play the music out
	*/
    function sendServer() {
  	if(storeCode.length == null || storeCode.length == 0) {
	  console.log('You haven\'t typed anything yet');
	  return;
  	}
}
};
control();
var num=0;
var storeNode;
var shortcut=require('./mousetrap.js');

var inputForm = document.querySelector('form');
/* For testing if shortcut is working
shortcut.add("Ctrl+B", 
	function() { 
	alert("The bookmarks of your browser will show up after this alert"); 
	}, 
	{ 'type':'keydown', 'propagate':true, 'target':document} 
); */
var msg = new SpeechSynthesisUtterance('Hello World');
    window.speechSynthesis.speak(msg);
   	window.speechSynthesis.resume();
var isPaused=true;
if('speechSynthesis' in window){
	var synth = window.speechSynthesis;
	var input;
	
	var speech;
	
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
	@param: input
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
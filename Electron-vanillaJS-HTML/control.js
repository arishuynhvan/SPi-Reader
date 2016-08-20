/**@module*/
// Functions associated with forms and buttons on index.html are defined here.

var num=0;
var storeNode;

function submit(){
    //Store the value in the text-field, which is the input from the user, into a variable
	var storeCode = document.getElementById('text_field').value;
	
	if(storeCode.length!==0){
		storeNode = document.createTextNode(storeCode);
		document.getElementById('buffer1').appendChild(storeNode);
	} 
}
/**For deleting buffers
 */
function del(){
	storeNode.parentNode.removeChild(storeNode);
}
/** For sending input to server
 */ 
function sendServer() {
  if(storeNode.length == null || storeNode.length == 0) {
	  console.log('buffer is empty');
	  return;
  }

  console.log('playing: ' + storeNode.nodeValue);
  var exec = require('child_process').exec, child;

  child = exec('./client/SPi-reader.rb ' + storeNode.nodeValue,
      function (error, stdout, stderr) {
	  console.log('stdout: ' + stdout);
	  console.log('stderr: ' + stderr);
	  if (error !== null) {
	    console.log('exec error: ' + error);
	  }
  });
}

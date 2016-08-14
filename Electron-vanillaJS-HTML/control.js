

var num=0;
var storeNode;
function submit(){

//Store the value in the text-field, which is the input from the user, into a variable
	var storeCode = document.getElementById('text_field').value;
	
	if(storeCode.length!==0){
		storeNode = document.createTextNode(storeCode);
		document.getElementById('buffer1').appendChild(storeNode);
	} 
	sendServer(storeCode);
}

function del(){
	storeNode.parentNode.removeChild(storeNode);
}

function sendServer(storeCode) {
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

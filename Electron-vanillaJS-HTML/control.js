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
function del(){
	storeNode.parentNode.removeChild(storeNode);
}
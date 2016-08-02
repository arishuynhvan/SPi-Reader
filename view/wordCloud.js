var num=0;

function submit(){

//Store the value in the text-field, which is the input from the user, into a variable
	var storeWord = document.getElementById('text_field').value;
	
	if(storeWord.length===0){
		document.getElementById('displaytext').innerHTML="Empty Input!!!!!";
	} 
	/*else{

		//Get elements with the class name "cloud_word"
		var cloudWords = document.getElementsByClassName("cloud_word");

		//Select a random item in the array and set its to the user's input
		var randNum= Math.floor(Math.random() * cloudWords.length);
		cloudWords[randNum].innerHTML=storeWord;

		//Clear input text
		document.getElementById("text_field").value="";

		//Count the number of words submitted
		num++;
		//(0p) Display the number of words submitted
		document.getElementById('displaytext').innerHTML= num+" words have been submitted!";

	}*/
}
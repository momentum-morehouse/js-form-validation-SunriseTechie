
// Somewhere there is a built-in function that is something like this
/* I don't know now where this applies but I have to submit something 
today so that I can start the process of improving it and learning what 
I failed to comprehend this week.  It is already 4 p.m. on Friday and
this assignment was due Wednesday, 9/23/20 */
// This is from this week's small group session 

form.addEventListener(“submit” , (event) => {
	event.preventDefault( );
	let userInput = prompt(“give me a number“) 
	let userNumber = parseInt(userInput)  /* parseInt – gets number ready  */
	if (userNumber > 6){	/* to control the workflow */
		alert(“number is too high”)
	} else {      /* if – else statement to control the  user’s experience on the webpage */
		alert(“your lucky number is “ +userNumber)  /* cacatinate it ~ join in */
}
	alert(“please fill your form out”)
	alert(“go back and try again”)
}


console.log('Add validation!');

function roundStart(){											//This Function will log a startmessage 	
	console.log('------------------------------------');
	console.log('Time to guess! Pick a chest from 1-3');
	console.log(["0","0","0"]);
};
roundStart();													
let score = 0; 				

/**
* @desc Places a random diamond in one of the chests and checks if the user 
*		won or not with a message. At the end the game is restarted. 
* @param number userInput - a number from 1-3 representing a chest in the array.
*/

function guess(userInput){										
	const randomNumber = Math.floor((Math.random() * 3) + 1);	// 	Saves a random number (1-3) in the variabel randomNumber.		
	(function(){												// 	Will show where the diamond were.
		const revealDiamondPosition = ["x","x","x"];												
		revealDiamondPosition.splice(randomNumber-1,1,'v');		// 	randomNumber is spliced into the array in the form of a 'v'(-1 for the right arrayindex).
		console.log(revealDiamondPosition);						//	The updated array, with 'v', is logged.
    })();
    
	if(userInput === randomNumber) {							// If the player got the correct number as randomNumber, the code will run.	
		score = score +5;										//	Adds 5 to score.
		console.log('Correct! You are almost as amazing as I am!');
		console.log('Your score is:',score);					
	} else if (score === 0) {									// 	If the player got a incorrect number that wasn't the randomNumber and has a score of 0, the code will run.
		console.log('Fail! No diamonds for you, classic NOOB!')
		console.log('Your score is:',score);					
	} else {													//	If either the "if" or "else if" code ran, this will run.
		score = score -5;										//	Subtracts 5 from score.
		console.log('Fail! Now you lose 5 points you Bottom-Dweller!')
		console.log('Your score is:',score);																						
	}		
	roundStart();												//	Calls the startfunction for the next round.
};





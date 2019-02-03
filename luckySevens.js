
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

var gameMoney = 0;
var rollCount = 0;
var moneyArray = [];


function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

function validateItems() { //runs lucky sevens game //
    clearErrors();
	rollCount = 0;
	moneyArray = [];
	var startingBet = document.forms["luckySevens"]["startingBet"].value;
    if (startingBet == "" || startingBet <= 0) {
        alert("Starting Bet must be greater than zero.");
        document.forms["luckySevens"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["startingBet"].focus();
        return false;
    }
	else {
		gameMoney = startingBet;
		while (gameMoney > 0) {
			var rollOne = rollDice(6);
			var rollTwo = rollDice(6);
			if (rollOne + rollTwo == 7) {
				gameMoney = gameMoney + 4;
				rollCount = rollCount + 1;
				moneyArray.push(gameMoney);
			} else {
				gameMoney = gameMoney - 1;
				rollCount = rollCount + 1;
				moneyArray.push(gameMoney); //moneyArray seems to be working properly
			}
			var mostMoney = Math.max.apply(null, moneyArray); //gives me the highest amount won
			var rollCountAtHighestWon = moneyArray.indexOf(mostMoney);
		} //the index of the largest number in moneyArray should be equivalent to the roll count at the time 
		document.getElementById("results").style.display = "block";
		document.getElementById("submitButton").innerText = "Play Again";
		document.getElementById("startBet").innerText = "$" + startingBet;
		document.getElementById("rollsBeforeBroke").innerText = rollCount;
		document.getElementById("highestAmountWon").innerText = mostMoney;
		document.getElementById("rollCountAtHighest").innerText = rollCountAtHighestWon;
	}
   return false;
}
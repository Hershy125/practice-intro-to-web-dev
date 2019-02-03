var resultArray = [];

function displayEvens() {
	for (var loopCounter = document.forms["numberFun"]["start"];
		loopCounter < document.forms["numberFun"]["end"];
		loopCounter + document.forms["numberFun"]["step"]) {
		if (loopCounter % 2 == 0) {
			resultArray.push(loopCounter);
		}
	}
	return resultArray;
}


function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["start"].value = "";
    document.forms["numberFun"]["end"].value = "";
	document.forms["numberFun"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.forms["numberFun"]["start"].focus();
}
function validateItems() {
    clearErrors();
    if (start == "" || isNaN(start)) {
        alert("Start must be filled in with a number.");
        document.forms["numberFun"]["start"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["start"].focus();
        return false;
    } else if (end == "" || isNaN(end)) {
       alert("End must be filled in with a number.");
       document.forms["numberFun"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["end"].focus();
       return false;
	} else if (end < start) {
		alert("End must be a number greater than start.");
       document.forms["numberFun"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["end"].focus();
       return false;
	} else if (step == "" || isNaN(step)) {
		 alert("Step must be filled in with a number.");
       document.forms["numberFun"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["step"].focus();
       return false;
	} else if (step < 0) {
		alert("Step must be greater than 0.");
       document.forms["numberFun"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["step"].focus();
       return false;
	}
	
   document.getElementById("results").style.display = "block";
   document.getElementById("resultText").innerHTML = displayEvens();
   return false;
}
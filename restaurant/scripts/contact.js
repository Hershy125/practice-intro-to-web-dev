function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contact"].elements.length; 
        loopCounter++) {
        if (document.forms["contact"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contact"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 


function validateContact(){
	clearErrors();
	var name = document.forms["contact"]["name"].value;
	var email = document.forms["contact"]["email"].value;
	if (name == "") {
		alert("Please enter your name");
		document.forms["contact"]["name"]
           .parentElement.className = "form-group has-error";
		  document.forms["contact"]["name"].focus();
		  return false;
	}
	if (email == "") {
		alert("please enter an email address");
		document.forms["contact"]["email"]
			.parentElement.className = "form-group has-error";
			document.forms["contact"]["email"].focus();
			return false;
	}
	document.getElementById("isValid").innerText = "Your request has been submitted!";
	return false;
}

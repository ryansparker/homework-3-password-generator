
// Assignment Code
var generateBtn = document.querySelector("#generate");


    //function for generating password
    function generatePassword() {
    
    //VARIABLES
    var confirmLength = "";
    var confirmLowercase = "";
    var confirmUppercase = "";
    var confirmNumeric = "";
    var confirmSpecial = "";

    var passValue = "";
    var passDetails = "";
    var passLength = "";

    var finalPassword = "";

    var special = "!@#$%^&*?()-_=+:<>/|";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";

    //PASSWORD LENGTH PROMPT
    confirmLength = prompt("Select between 8 and 128 characters for your password length:");
    //LOWERCASE Y OR NO? PROMPT
    confirmLowercase = prompt ("Do you want lowercase characters: y or n?");
    //UPPERCASE Y OR NO? PROMPT
    confirmUppercase = prompt ("Do you want uppercase characters: y or n?");
    //NUMERIC Y OR NO? PROMPT
    confirmNumeric = prompt ("Do you want numeric characters: y or n?");
    //SPECIAL Y OR NO? PROMPT
    confirmSpecial = prompt ("Do you want special characters: y or n?");

    if (confirmLength >= 8 && confirmLength <= 128) {
        passValue = confirmLength;
        
    }
    
    if (confirmLowercase === 'y') {
        passDetails += lowercase;
       
    }

    if (confirmUppercase === 'y') {
        passDetails += uppercase;  
       
    }

    if (confirmNumeric === 'y') {
        passDetails += numeric;
        
    }

    if (confirmSpecial === 'y') {
        passDetails += special;
        
    
    }
     passLength = passValue;

    for (var i = 0; i < passLength; i++) {
        finalPassword += passDetails.charAt(
            Math.floor(Math.random() * passDetails.length));

    }
    alert("Here is your password: " + finalPassword); 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

}

generateBtn.addEventListener("click", writePassword);




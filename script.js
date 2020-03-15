
// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLength = "";
var confirmLowercase = "";
var confirmUppercase = "";
var confirmNumeric = "";
var confirmSpecial = "";

//function for generating password
function generatePassword() {
    
    //PASSWORD LENGTH PROMPT
    confirmLength = prompt("Select between 8 and 128 characters for your password length:");

    if (confirmLength <8 || confirmLength >128){
        alert ("Password must be between 8 and 128 characters.");
        prompt ("Select between 8 and 128 characters for your password length:");
    }
    //LOWERCASE Y OR NO? PROMPT
    confirmLowercase = prompt ("Do you want lowercase characters: y or n?");
    //UPPERCASE Y OR NO? PROMPT
    confirmUppercase = prompt ("Do you want uppercase characters: y or n?");
    //NUMERIC Y OR NO? PROMPT
    confirmNumeric = prompt ("Do you want numeric characters: y or n?");
    //SPECIAL Y OR NO? PROMPT
    confirmSpecial = prompt ("Do you want special characters: y or n?");

    var password = '';
    var special = "!@#$%^&*?()-_=+:<>/|";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numeric = "0123456789";
  

for (var i = 0; i < confirmLength; i++) {

    if (confirmLowercase === 'y' && confirmLength >= 8 || confirmLength <= 128) {
        console.log(password += lowercase.charAt(Math.floor(Math.random) * lowercase.length));
    }

    if (confirmUppercase === 'y' && confirmLength >= 8 || confirmLength <= 128) {
        console.log(password += uppercase.charAt(Math.floor(Math.random) * uppercase.length));
    }

    if (confirmNumeric === 'y' && confirmLength >= 8 || confirmLength <= 128) {
        console.log(password += numeric.charAt(Math.floor(Math.random) * numeric.length));
    }

    if (confirmSpecial === 'y' && confirmLength >= 8 || confirmLength <= 128) {
        console.log(password += special.charAt(Math.floor(Math.random) * special.length));
    }
}
return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);




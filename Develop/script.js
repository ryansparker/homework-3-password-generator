// Assignment Code
var generateBtn = document.querySelector("#generate");

//pick password length
var passwordLength = prompt ("What is the character length of your password (between 8 & 128 only)")

//confirming character types
var confirmLowercase = confirm ("Do you want lowercase characters?");
var confirmUppercase = confirm ("Do you want uppercase characters?");
var confirmNumeric = confirm ("do you want numeric characters?");
var confirmSpecial = confirm ("Do you want special characters?")

//if user wants lowercase characters
if (confirmLowercase) {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

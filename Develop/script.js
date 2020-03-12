// Assignment Code
var generateBtn = document.querySelector("#generate");

//pick password length
var passwordLength = prompt ("Select between 8 and 128 characters for your password length:")

//confirming character types
var confirmLowercase = confirm ("Do you want lowercase characters?");
var confirmUppercase = confirm ("Do you want uppercase characters?");
var confirmNumeric = confirm ("do you want numeric characters?");
var confirmSpecial = confirm ("Do you want special characters?");

//if user wants lowercase characters (confirmLowercase === true) we run the following block of code.
if (confirmLowercase) {
  alert("You want lowercase!");
}
else {
  alert("You don't want lowercase!");
}

//if user wants uppercase characters (confirmUppercase === true) we run the following block of code.
if (confirmUppercase) {
  alert("You want uppercase!");
}
else {
  alert("You don't want uppercase!");
}

//if user wants numeric characters (confirmNumeric === true) we run the following block of code.
if (confirmNumeric) {
  alert("You want numbers!");
}
else {
  alert("You don't want numbers");
}

//if user wants special characters (confirmSpecial === true) we run the following block of code.
if (confirmSpecial) {
  alert("You special characters!");
}
else {
  alert("You don't want special characters!");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//homework- Anthony's tips: first define generatePassword function, and should be many arrays containing many characters
//try to get it to type yes or no like Julian, switch alerts to prompts
// .value?

//need a passwordSetLength var to represent what the user put in
//for statement

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

//pick Password Length
var passwordLength = prompt ("Select between 8 and 128 characters for your password length:");
if (passwordLength < 8) {
  alert ("The password length must be 8 characters or more.");
}
else if (passwordLength > 128) {
  alert ("The password length must be 128 characters or less.");
}
else if (passwordLength >7 || passwordLength <129) {
  alert ("You selected " + passwordLength + " characters.");
console.log (passwordLength);
}

//Lower Case ?
var confirmLowercase = prompt ("Do you want lowercase characters: y or n?");

//LOWERCASE PROMPT
if (confirmLowercase === "y") {
  alert("You want lowercase!");
}
else if (confirmLowercase === "n") {
  alert("You don't want lowercase!");
}
else if (confirmLowercase != "y" || confirmLowercase != "n") {
  alert("You must select y or n only")
}

//UPPERCASE PROMPT
var confirmUppercase = prompt ("Do you want uppercase characters: y or n?");
if (confirmUppercase === "y") {
  alert("You want uppercase!");
}
else if (confirmUppercase === "n") {
  alert("You don't want uppercase!");
}
else if (confirmUppercase != "y" || confirmUppercase != "n") {
  alert("You must select y or n only")
}
//NUMERIC PROMPT
var confirmNumeric = prompt ("Do you want numeric characters: y or n?");
if (confirmNumeric === "y") {
  alert("You want numbers!");
}
else if (confirmNumeric === "n") {
  alert("You don't want numbers!");
}
else if (confirmNumeric != "y" || confirmNumeric != "n") {
  alert("You must select y or n only")
}
//SPECIAL PROMPT
var confirmSpecial = prompt ("Do you want special characters: y or n?");
if (confirmLowercase === "y") {
  alert("You want special!");
}
else if (confirmLowercase === "n") {
  alert("You don't want special!");
}
else if (confirmLowercase != "y" || confirmLowercase != "n") {
  alert("You must select y or n only")
}

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var arrayLength = uppercase.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(uppercase[i]);
}

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayLength = lowercase.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(lowercase[i]);
}

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayLength = numeric.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(numeric[i]);
}

var special = ["!","@","#","$","%","^","&", "*","?", "(", ")", "-", "_", "=", "+", ":", "<", ">", "/", "|"];
var arrayLength = special.length;
for (var i = 0; i < arrayLength; i++) {
  console.log(special[i]);
}



// //if user wants uppercase characters (confirmUppercase === true) we run the following block of code.
// if (confirmUppercase) {
//   alert("You want uppercase!");
// }
// else {
//   alert("You don't want uppercase!");
// }

// //if user wants numeric characters (confirmNumeric === true) we run the following block of code.
// if (confirmNumeric) {
//   alert("You want numbers!");
// }
// else {
//   alert("You don't want numbers");
// }

// //if user wants special characters (confirmSpecial === true) we run the following block of code.
// if (confirmSpecial) {
//   alert("You want special characters!");
// }
// else {
//   alert("You don't want special characters!");
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

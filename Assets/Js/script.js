// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var Numbers = "01234567890123456789";
var UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var SpecialChar = "!@#$%^&*()_+[]{};:,.<>/?\|`~";



function generatePassword(){
  var passwordLength = (prompt ("Between 8 -128 characters, How many Characters would you like your password to contain"));

  if(passwordLength < 8){
    alert("Password must be at least 8 or more characters long!");
  } else if(passwordLength > 128){
    alert("Password must not be more than 128 characters long!");
  } else{ 
    var userChoice = confirm ("Would you like to include special characters");
    var userChoice = confirm ("Would you like to include uppercase characters");
    var userChoice = confirm ("Would you like to include lowercase characters");
  }

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

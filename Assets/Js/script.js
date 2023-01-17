// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var choiceArray = [];

var NumberArray = "01234567890123456789";
var UppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowercaseArray= "abcdefghijklmnopqrstuvwxyz";
var SpecialCharArray = "!@#$%^&*()_+[]{};:,.<>/?\|`~";



function generatePassword(){
  var passwordLength = (prompt ("Between 8 -128 characters, How many Characters would you like your password to contain"));

  if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between least 8 and 128 characters long!");
    return false
  } 
  
  if (confirm ("Would you like to include number characters")){
    choiceArray = choiceArray.concat(NumberArray);
  }  
  
  if (confirm ("Would you like to include special characters")){
    choiceArray = choiceArray.concat(SpecialCharArray);
  }
    
  if (confirm ("Would you like to include uppercase characters")){
    choiceArray = choiceArray.concat(UppercaseArray);
  }  
    
  if (confirm ("Would you like to include lowercase characters")){
    choiceArray = choiceArray.concat(LowercaseArray);
  }
  

  }
    var random = Math.floor(Math.random() * 10) + 1;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

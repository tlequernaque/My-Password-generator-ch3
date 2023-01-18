// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var choiceArray = [];

var NumberArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
var UppercaseArray = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var LowercaseArray= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var SpecialCharArray = [ "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")","-", "=", "+", ",", "<", ">", ".", "?", ";", ":", "[", "]", "{", "}", ] ;



function generatePassword(){
  var passwordLength = parseInt(prompt ("Between 8 -128 characters, How many Characters would you like your password to contain"));
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Password must be between 8 and 128 characters long!");
    return 
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

  var password = "";
  for(var i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    var randomCharacter = choiceArray[randomIndex];
    password += randomCharacter;
  } return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
if (password){
  passwordText.value = password;};

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

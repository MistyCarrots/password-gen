//defines length of password
var charLength = 8; 
//possible characters in password
var possibleChar = [];

//lowercase characters
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
//uppercase characters
var upperChar = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
//number characters
var numberChar = ["1","2","3","4","5","6","7","8","9","0"];
//special characters in password
var specialChar = ["!","@","#","$","%","^","&","*","/","?",".",",","<",">","(",")","-","="];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //to return the statment as true or fasle
  var resPromopts= getPrompts();
  var passwordText = document.querySelector("#password");

  if(resPromopts){
  var password = generatePassword();
  passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  //password based on prompt
var randompassword = "";
//use a for loop to go for however long users prompted password length
for(var i = 0; i < charLength; i++) {
  //giving value // creating randomization index
  var randomValue = Math.floor(Math.random() * possibleChar.length);
  //getting random symbol from array into password
  randompassword = randompassword + possibleChar[randomValue]; 
}
return randompassword;


}

function getPrompts(){
  //using boolean to create a critera
  possibleChar = [];
  charLength = parseInt(prompt("How long would you like your password? 8-128 characters allowed."));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Must be inbetween 8-128 characters.");
    return false;
  }
//asking user what characters they'd like
  if (confirm("do you want lowercase letters?")) {
    possibleChar = possibleChar.concat(lowerChar);
  }
  if (confirm("do you want uppercase letters?")) {
    possibleChar = possibleChar.concat(upperChar);
  }
  if (confirm("do you want numbers?")) {
    possibleChar = possibleChar.concat(numberChar);
  }
  if (confirm("do you want special characters?")) {
    possibleChar = possibleChar.concat(specialChar);
  }
  return true;
}
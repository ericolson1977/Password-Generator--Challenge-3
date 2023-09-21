// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var userInput = prompt("How many charaters would you like in you password?");
  
  if ((userInput <= 7) || (userInput >= 129)) {
    alert ("Password length must be between 8 and 128 characters.");
    generatePassword();
    return;
  }
} 

  var includeSpecial = confirm("Would you like to inclue special charatcers?");
  var includeNumberic = confirm("Would you like to include numeric characters?");
  var includeLower = confirm("Would you like to include lowercase charaters?");
  var includeUpper = confirm("Would you like to include uppercase charaters?");
  
  var specialCharaters = "!@#$%^&*()_+{}[]|;:,.<>?";
  var numeric = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var characters = "";

  if (includeSpecial) {
    characters += specialCharaters;
  }
  if (includeNumberic) {
    characters += numeric;
  }
  if (includeLower) {
    characters += lowerCase;
  }
  if (includeUpper) {
    characters += upperCase
  }

  if (characters === "") {
    alert("You must pick at least one character type.");
    generatePassword(); 
  }

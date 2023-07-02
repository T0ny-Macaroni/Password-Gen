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


//Prompts for user choice

var length = window.prompt("How many characters?");
console.log(length);



























//prompt how many characters


//var for characters

//What types of characters
// special number upper lower
//window.confirm to gather which types of characters they want 

//use answers to make password 
//var that includes all possible characters 
//separate vars for each type. arrays
//example var = upperLetters = [ABC]

//take all true arrays and concat into new array -loop
//choose random chars from arr based on user choice 
//var push into new array 
//var password =turn array into strong using .tostring 

//return password 
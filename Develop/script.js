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
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Variables 
var userChoices;
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;
var choice;
var passwordText = document.querySelector("#password");

//Character arrays
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
console.log(lowerCase);
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
console.log(upperCase);
var numeric = ("1234567890");
console.log(numeric);
var special = ("!#$%&()*,-./:;<=>?@[']^_`{|}~' ");
console.log(special);


function generatePassword() {
  //Prompts the user to pick a userChoices 
  var userChoices = window.prompt("How many characters? Choose between 8 and 128.");
  if (!userChoices) {
    alert("This needs a value");
    // Asks the user whether they would like these characters or not
  } else {
    confirmLower = window.confirm("Would you like Lowercase characters?");
    confirmUpper = window.confirm("Would you like Uppercase characters?");
    confirmNumeric = window.confirm("Would you like Numeric characters?");
    confirmSpecial = window.confirm("Would you like Special characters?");
  }
  choiceArray();
  passwordText.value = randomize();

  //   console.log("User Choices", userChoices);
  //   console.log("Lowercase", confirmLower);
  //   console.log("Uppercase", confirmUpper);
  //   console.log("Numeric", confirmNumeric);
  //   console.log("Special", confirmSpecial);
  //   console.log("Chosen",choice);
};

//Takes the chosen answers and stuffs them all into a string 
function choiceArray() {
    //4 chosen
  if (confirmLower && confirmUpper && confirmNumeric && confirmSpecial) {
    choice = lowerCase.concat(upperCase, special, numeric);
    //3 chosen
  } else if (confirmLower && confirmUpper && confirmNumeric) {
    choice = lowerCase.concat(upperCase, numeric);
  } else if (confirmUpper && confirmNumeric && confirmSpecial) {
    choice = upperCase.concat(special, numeric);
  } else if (confirmLower && confirmNumeric && confirmSpecial) {
    choice = lowerCase.concat(numeric, special)
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    choice = lowerCase.concat(upperCase, special);
    //2 chosen
  } else if (confirmLower && confirmUpper) {
    choice = lowerCase.concat(upperCase);
  } else if (confirmLower && confirmNumeric) {
    choice = lowerCase.concat(numeric);
  } else if (confirmLower && confirmSpecial) {
    choice = lowercase.concat(special);
  } else if (confirmUpper && confirmNumeric) {
    choice = upperCase.concat(numeric);
  } else if (confirmUpper && confirmSpecial) {
    choice = upperCase.concat(special);
  } else if (confirmSpecial && confirmNumeric) {
    choice = special.concat(numeric);
    //1 Chosen
  } else if (confirmLower) {
    choice = lowerCase;
  } else if (confirmUpper) {
    choice = upperCase;
  } else if (confirmNumeric) {
    choice = numeric;
  } else if (confirmSpecial) {
    choice = special;
  };
}
//takes the created string and picks characters out of it randomly then spits it out as a password
function randomize() {
  var result = "";
  // console.log(CHARACTERLENGTH);
  // console.log(choice.length);
  for (var index = 0; index < choice.length; index++) {
    result += choice.charAt(Math.floor(Math.random() * choice.length));
  }
  console.log("randomize", result);
  console.log(result.toString().length);
  return result;
}



//if the return value is greater than 93 add enough characters to make it 128

// generatePassword();













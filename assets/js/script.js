// Define variables
var passwordLength = 8;
var passwordCharacters = [];
var lowercaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharactersArr = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Starter: button
var generateBtn = document.querySelector("#generate");

// Starter: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password
function writePassword() {
  var isCriteriaValid = getPasswordCriteria();
  var passwordText = document.querySelector("#password");

  if (isCriteriaValid) {
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
  } else {
    passwordText.value = "";
  }
}

// Get password criteria
function getPasswordCriteria() {
  passwordCharacters = [];

  // Prompt for length of password between 8 and 128 characters
  passwordLength = parseInt(
    prompt(
      "How many password characters would you like to use? Enter a number between 8 and 128."
    )
  );
  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
    alert("Be sure to enter a number between 8 and 128.");
    return false;
  }

  // Prompt for lowercase characters
  if (confirm("Do you want to include lowercase letters?")) {
    passwordCharacters = passwordCharacters.concat(lowercaseArr);
  }

  // Prompt for uppercase characters
  if (confirm("Do you want to include uppercase letters?")) {
    passwordCharacters = passwordCharacters.concat(uppercaseArr);
  }

  // Prompt for numbers
  if (confirm("Do you want to include numbers?")) {
    passwordCharacters = passwordCharacters.concat(numbersArr);
  }

  // Prompt for special characters
  if (confirm("Do you want to include special characters?")) {
    passwordCharacters = passwordCharacters.concat(specialCharactersArr);
  }

  if (passwordCharacters.length === 0) {
    alert(
      "Select at least one of the following types: lowercase letters, uppercase lettters, numbers, or special characters/symbols."
    );
    return false;
  }

  return true;
}

// Generate random password
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomSetting = Math.floor(Math.random() * passwordCharacters.length);
    password = password + passwordCharacters[randomSetting];
  }
  return password;
}

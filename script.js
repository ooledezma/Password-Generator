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
  //Array of various password criteria

  var specialCharacter = [
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
    ",",
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
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var numericCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var lowerCharacter = [
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

  var upperCharacter = [
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

  // Collect the user's response for password lenght

  var passwordLenght = parseInt(
    prompt(
      "How many characters would you like your password to contain?\n(Must be between 8 and 128 characters!"
    )
  );
  console.log(passwordLenght);

  // Loops if the lenght is not betwee 8 and 120 answer is outside the parameters

  while (
    passwordLenght < 8 ||
    passwordLenght > 128 ||
    isNaN(passwordLenght) === true
  ) {
    alert("Password length must be between 8-128 characters Try again!");
    var passwordLenght = parseInt(
      prompt(
        "How many characters would you like your password to contain?\n(Must be between 8 and 128 characters!"
      )
    );
  }

  // Collect the user's response for password criteria

  var userInput = {
    special: confirm("Click OK to confirm including special characters."),
    numeric: confirm("Click OK to confirm including numeric characters."),
    lowercase: confirm("Click OK to confirm including lowercase characters."),
    uppercase: confirm("Click OK to confirm including uppercase characters."),
  };

  // Loops if no characters have been selected

  if (
    userInput.special == false &&
    userInput.numeric == false &&
    userInput.lowercase == false &&
    userInput.uppercase == false
  ) {
    alert("At least one type of character needs to be selected");
    var userInput = {
      special: confirm("Click OK to confirm including special characters."),
      numeric: confirm("Click OK to confirm including numeric characters."),
      lowercase: confirm("Click OK to confirm including lowercase characters."),
      uppercase: confirm("Click OK to confirm including uppercase characters."),
    };
  }

  var passwordGenerated = "";
  var passwordArray = [];

  // creates a new password Array based on the user's response for password criteria as well as the lenght.

  for (var i = 0; i < passwordLenght; i++) {
    if (userInput.special) {
      var randomSpecial =
        specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
      passwordArray.push(randomSpecial);
    }

    if (userInput.numeric) {
      var randomNumeric =
        numericCharacter[Math.floor(Math.random() * numericCharacter.length)];

      passwordArray.push(randomNumeric);
    }

    if (userInput.lowercase) {
      var randomLower =
        lowerCharacter[Math.floor(Math.random() * lowerCharacter.length)];

      passwordArray.push(randomLower);
    }

    if (userInput.uppercase) {
      var randomUpper =
        upperCharacter[Math.floor(Math.random() * upperCharacter.length)];
      passwordArray.push(randomUpper);
    }

    // Randomly picks a password combination from the Password Array based on the leght of the user

    var randomCharacter =
      passwordArray[Math.floor(Math.random() * passwordArray.length)];

    passwordGenerated += randomCharacter;
  }

  return passwordGenerated;
}

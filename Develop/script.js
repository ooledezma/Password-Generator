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




function writePassword() {

  //Array of various password criteria

  var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

  var numericCharacter = [0,1,2,3,4,5,6,7,8,9]

  var lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var upperCharacter = ["A", "B", "C", "D","E","F","G","H","I","J","K", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

   //Array of various password criteria
   
   var passwordGenerated = ''

  // Collect the user's response for password lenght

  var passwordLenght = prompt ("How many characters would you like your password to contain?\n(Must be between 8 and 128 characters!")

  // Loop if the lenght is not betwee 8 and 120 answer is outside the parameters 

    while(passwordLenght < 8 || passwordLenght > 128) {
        alert("Password length must be between 8-128 characters Try again!")
        var passwordLenght = prompt ("How many characters would you like your password to contain?\n(Must be between 8 and 128 characters!")
        } 

    console.log(passwordLenght)

  // Collect the user's response for password criteria 

  var userInput = [

    {special: confirm ("Click OK to confirm including special characters.")},
    {numeric: confirm ("Click OK to confirm including numeric characters.")},
    {lowercase: confirm ("Click OK to confirm including lowercase characters.")},
    {uppercase: confirm ("Click OK to confirm including uppercase characters.")},
  ]

    console.log(userInput)

  // Generates random characters based on the user's response for password criteria and the lenght

  for (var i = 0; i < passwordLenght; i++)  {

    if (userInput.special = true) {
      
      var randomSpecial = specialCharacter [Math.floor(Math.random() * specialCharacter.length)]

    } 
    
    if (userInput.numeric = true) {
    
      var randomNumeric = numericCharacter [Math.floor(Math.random() * numericCharacter.length)]
           
    } 
      
    if (userInput.lowercase = true) {

    var randomLower = lowerCharacter [Math.floor(Math.random() * lowerCharacter.length)]
    
      } 
        
    if (userInput.uppercase = true) {

    var randomUpper = upperCharacter [Math.floor(Math.random() * upperCharacter.length)]
     
    } 

    console.log(randomSpecial + randomNumeric + randomLower + randomUpper)
 
  } 


} 

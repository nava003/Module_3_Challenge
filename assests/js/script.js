// Assignment code here

// Alert() them the possible choices in generating a new password
alert("Here are the following options available:\n\
-- Numeric Characters (0-9)\n\
-- Alphabetic Characters (A-Z) (Upper and Lowercase)\n\
-- Special Characters (!@#$/... etc.)");

// Creating a function to begin asking for password criteria
function generatePassword() {
  
  var numericSet = "0123456789";
  var alphaUpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
  var specialSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Confirm() them the first criteria question via IF Statement
  if (confirm("Would you like your password to include Numeric Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {

    
  }
  else {
    
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

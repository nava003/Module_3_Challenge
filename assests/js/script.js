// Assignment code here

// Alert() them the possible choices in generating a new password
alert("Here are the following options available:\n\
-- Numeric Characters (0-9)\n\
-- Alphabetic Characters (A-Z) (Upper and Lowercase)\n\
-- Special Characters (!@#$/... etc.)");

// Creating a function to begin asking for password criteria
function generatePassword() {
  
  // Will hold all characters based on answered criteria
  var newPassword = "";

  // Confirm() first criteria question via IF Statement
  if (confirm("Would you like your password to include Numeric Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {
    
    // Declare with a set of Numeric Characters
    // and Include the set with newPassword
    var numericSet = "0123456789";
    newPassword += numericSet;

  } else {
    alert("Password will not include Numeric Characters.");
  }


  // Confirm() second criteria question via IF Statement
  if (confirm("Would you like your password to include Uppercase Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {
    
    // Declare with a set of Uppercase Letters
    // and Include the set with newPassword
    var alphaUpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    newPassword += alphaUpperSet;

  } else {
    alert("Password will not include Uppercase Characters.");
  }


  // Confirm() third criteria question via IF Statement
  if (confirm("Would you like your password to include Lowercase Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {

    // Declare with a set of Lowercase Letters
    // and Include the set with newPassword
    var alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
    newPassword += alphaLowerSet;

  } else {
    alert("Password will not include Lowercase Characters.");
  }


  // Confirm() final criteria question via IF Statement
  if (confirm("Would you like your password to include Special Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {

    // Declare with a set of Special Letters
    // and Include the set with newPassword
    var specialSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    newPassword += specialSet;

  } else {
    alert("Password will not include Special Characters.");
  }

  console.log(newPassword);
  return newPassword;
  // Password creation here
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

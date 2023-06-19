// Assignment code here

// Alert() them the possible choices in generating a new password
alert("Here are the following options available:\n\n\
-- Numeric Characters (0-9)\n\
-- Alphabetic Characters (A-Z) (Upper and Lowercase)\n\
-- Special Characters (!@#$/... etc.)\n\
-- At least 8 characters or no more than 128 characters");

// Creating a function to begin asking for password criteria
function generatePassword() {
  
  // Declaration of variables
  var newPassword = "";
  var passwordContainer = "";
  var passwordLength = 0;

  // Confirm() first criteria question via IF Statement
  if (confirm("Would you like your password to include Numeric Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {
    
    // Declare a set of Numeric Characters
    // and Include the set with passwordContainer
    var numericSet = "0123456789";
    passwordContainer += numericSet;

  } else {
    alert("Password will not include Numeric Characters.");
  }


  // Confirm() second criteria question via IF Statement
  if (confirm("Would you like your password to include Uppercase Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {
    
    // Declare a set of Uppercase Letters
    // and Include the set with passwordContainer
    var alphaUpperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordContainer += alphaUpperSet;

  } else {
    alert("Password will not include Uppercase Characters.");
  }


  // Confirm() third criteria question via IF Statement
  if (confirm("Would you like your password to include Lowercase Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {

    // Declare a set of Lowercase Letters
    // and Include the set with passwordContainer
    var alphaLowerSet = "abcdefghijklmnopqrstuvwxyz";
    passwordContainer += alphaLowerSet;

  } else {
    alert("Password will not include Lowercase Characters.");
  }


  // Confirm() fourth criteria question via IF Statement
  if (confirm("Would you like your password to include Special Characters?\n\n\
  Respond with Yes [OK], or No [Cancel]")) {

    // Declare a set of Special Letters
    // and Include the set with passwordContainer
    var specialSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    passwordContainer += specialSet;

  } else {
    alert("Password will not include Special Characters.");
  }

  console.log("Entering function...");
  passwordLength = confirmLength();
  console.log("Exiting function...");


  // Creating new password based on criteria
  for (var i = 0; i < passwordLength; i++) {
    newPassword += passwordContainer.charAt(Math.floor(Math.random() * passwordLength));
  }

  return newPassword;
}

// confirmLength() function to ensure correct value is given
function confirmLength() {
  console.log("Inside function...")
  var functPassLength = prompt("Please enter a number between 8 and 128:");
  console.log("Answer taken. Should proceed to validate...")
  if (functPassLength >= 8 && functPassLength <= 128) {
    console.log("Length valid. Returning to main function...")
    return functPassLength;
  }
  else {
    console.log("Length invalid. Should reset to current function...")
    alert("Must be a Number between 8 and 128.\n Try again.");
    confirmLength();
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

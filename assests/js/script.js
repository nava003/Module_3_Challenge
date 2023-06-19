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

  passwordLength = confirmLength();

  //console.log("Password Length is: " + passwordLength);
  //console.log("Password Container: " + passwordContainer);
  //console.log("New Password: " + newPassword);
  
  // Creating new password based on criteria
  for (var i = 0; i < passwordLength; i++) {
    console.log("Entering for loop beginning with step " + i);
    newPassword += passwordContainer.charAt(Math.floor(Math.random() * passwordLength));
    console.log("New Password so far: " + newPassword)
  }

  console.log("Exited for loop...");
  return newPassword;
}

// confirmLength() function to ensure correct value is given
function confirmLength() {
  var newLength = 0;
  //console.log("newLength entered function with: " + newLength)
  newLength = prompt("Please enter a number between 8 and 128:");
  //console.log("newLength is now: " + newLength)
  if (newLength >= 8 && newLength <= 128) {
    //console.log("Valid. newLength new assignment: " + newLength)
    return newLength;
  }
  else {
    //console.log("Invalid. newLength is: " + newLength)
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

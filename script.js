// Assignment Code
var functionList = []; 
var generateBtn = document.querySelector("#generate");
var selection = [];
console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
function getRandomLower() {
  var RandomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  functionList.push(RandomLower);
  for (var i = 0; i < 26; i++) {
    String.fromCharCode(i);
  }
}

function getRandomUpper() {
  var RandomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  functionList.push(RandomUpper);
}

function getRandomNumber() {
  var RandomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  functionList.push(RandomNumber);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  var randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  functionList.push(randomSymbol);
}

function generatePassword() {
  // User selections 
  let passwordLength = parseInt(prompt("How many chacaters would you like your password to contain?"));
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You did not pick a valid option (8 to 128). Try again.");
  }

  let hasSpecialChars = confirm("Click OK to confirm including special characters");
  let hasNumericChars = confirm("Click OK to confirm including numeric characters");
  let hasLowercaseChars = confirm("Click OK to confirm including lowercase characters");
  let hasUppercaseChars = confirm("Click OK to confirm including uppercase characters");

  let password = "";
  
  console.log(functionList);

  if (hasSpecialChars) {
    getRandomSymbol();
  }
  if (hasNumericChars) {
    getRandomNumber();
  }
  if (hasLowercaseChars) {
    getRandomLower();
  }
  if (hasUppercaseChars) {
    getRandomUpper();
  }

  for (let i = 0; i < passwordLength; i++) {
    // check if the string contains special chars, numeric... etc if the user chose to include them
    
    if (hasSpecialChars) {
      // check if the password variable already has a special character, if not - call that function

      
    } else if (hasNumericChars) {
      

    } else if (hasLowercaseChars) {
      

    } else if (hasUppercaseChars) {
      

    } else {
      password += functionList[Math.floor(Math.random() * 3)]();
    }
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const generatePassword = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

// Generator functions - http://www.net-comber.com/charset.html

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

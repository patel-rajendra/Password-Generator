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


//Generate Password
function generatePassword(){
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var random_password ='';
  var str = '';

  var numberofcharacter = window.prompt("How many characters would you like your password to contain?");
  var specialcharacter = window.confirm("Click OK to confirm including special character");
  var numeric = window.confirm("Click OK to confirm numeric character");
  var lowercase = window.confirm("Click OK to confirm including lowercase characters");
  var uppercase = window.confirm("Click OK to confimr uppercase character");
  var num=parseInt(numberofcharacter);

  if(specialcharacter == true)
  {
    str = str + symbols;
  }
  if(numeric == true)
  {
    str = str + numbers;
  }
  if(lowercase == true)
  {
    str = str + lowerChar;
  }
  if(uppercase == true)
  {
    str = str + upperChar;
  }

  for(i=0;i<num;i++)
  {
    var char=Math.floor(Math.random()*str.length);
    random_password = random_password + str.charAt(char);
  }
  return random_password;
}

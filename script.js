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

  // Variable declaration 
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var random_password ='';
  var str = '';

  var numberofcharacter = window.prompt("How many characters would you like your password to contain?");
  var number=parseInt(numberofcharacter);
  
  // Checking condition for the length of at least 8 characters and no more than 128 characters
   if(number>=8 && number<=128)
   {
  var specialcharacter = window.confirm("Click OK to confirm including special character");
  var numeric = window.confirm("Click OK to confirm numeric character");
  var lowercase = window.confirm("Click OK to confirm including lowercase characters");
  var uppercase = window.confirm("Click OK to confimr uppercase character");
  

  // Conditional statement to include into password
  
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

  // Looping to generate password
    for(i=0;i<number;i++)
    {
      var char=Math.floor(Math.random()*str.length);
      random_password = random_password + str.charAt(char);
    }
    return random_password;
  }
  else
  {
    window.alert("Please enter the character between 8 to 128");
  } 
}

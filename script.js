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
   
  var length= parseInt(prompt("How many characters do you want?"))
  console.log(length)
  if(length< 8){
    alert("Atleast 8 characters required")
  return;
  }
  if(length> 128){
    alert("No more than 128 characters permitted")
  return;
  }
  
  var question2= confirm("Do you want lowercase characters?")
  var question3= confirm("Do you want uppercase characters?")
  var question4= confirm("Do you want to add special characters?")
  var question5= confirm("Do you want to add numbers?")
  if(question2=== false && question3=== false && question4=== false && question5=== false){
    alert("Please choose atleast one type!")
    return;

  }
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var special = '!@#$%^&*()';
  var password = '';
  var options = [lowercase, uppercase, numbers, special];
  var passwordArray = Array(length);
  for (i = 0; i < length; i++) {
      var currentOption = options[Math.floor(Math.random() * options.length)];
      var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
      password += randomChar;
      passwordArray.push(randomChar);
      console.log(password)
  }
  return password


    
  
  



}
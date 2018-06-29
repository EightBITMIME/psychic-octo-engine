// Code goes here
// Code goes here

let input1 = "text";
let input2 = "Dwayne"

isValid = validateInput(input1, input2);
if (isValid === true) {
  setCookie(input1,input2)
};

document.cookie = "username=John Doe";
//myCookie = document.cookie.tostring;

console.log (document.cookie);

console.log (isValid, input1,  input2);


function setCookie(cookieKey, cookieValue) {
  document.cookie = cookieKey + "=" + cookieValue + ";expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/";
   // document.cookie = "email=dcyr@textron.com;;expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/";
 console.log ("cookie function") 
  
}



function getCookie (cookieKey, cookieValue){
  
  
}


// Validates input as long as input1 matches a recognized type. Returns Boolean.
function validateInput (input1, input2){
switch (input1) {
  case "email":
    inputType = input1;
    isValid = validateEmail(input2);
    break
  case "phone":
    inputType = input1;
    isValid = validatePhone (input2);
    break;  
  case "text":
    inputType = input1;
    isValid = validateText (input2);
    break;
  default:
      isValid = false;
  };
return isValid
}

// Validates incoming text to make sure there are no numbers, specials or whitespace. Returns Boolean
function validateText (text) {
  //this regex should only match purely text fields
  let textPattern = /^[A-Za-z]*$/
  let textTest = textPattern.test(text);
  return textTest
}


//Validates incoming phone number to make sure it looks like a number. Returns Boolean
function validatePhone (phone) {
//Roelofs. (2017, October 25). Validate phone number with JavaScript. Retrieved June 28, 2018, from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
  let phonePattern = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
  let phoneTest = phonePattern.test (phone);
  return phoneTest;
}


//Validates incoming email to make sure it looks liek an email. Returns Boolean.
function validateEmail (email) {
//Email Address Regular Expression That 99.99% Works. (n.d.). Retrieved June 28, 2018, from http://emailregex.com/
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailTest = emailPattern.test(email);
return emailTest;
}



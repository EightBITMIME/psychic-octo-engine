// Code goes here
// Code goes here
//validates input. Potential inputtypes go in input1. Acceptable values are phone, email and text


let input1 = "phone";
let input2 = "dwaynecyr@gmail.com"

//create event listeners for each field in the user information block
var userAttr = ["email", "first", "last", "postal", "phone"]
var i;
for (i= 0; i < userAttr.length; i++)
  {
    var j = document.getElementById(userAttr[i]);
    j.addEventListener("focus",myFocusFunction, true);
    j.addEventListener("blur", myBlurFunction, true);
  }
//var email = document.getElementById("email");
//email.addEventListener("focus",myFocusFunction, true);
//email.addEventListener("blur", myBlurFunction, true);
  
function myFocusFunction() {
    
    var x = document.getElementById("form1");
      var attr = "";
      var i;
      for (i= 0; i < x.length; i++)
        {
          j = x.elements[i].value
          attr += x.elements[i].value + "<br>";
        }
      //validate email
      validateInput ("email", x.elements[0].value);
      if (validateInput ("text", x.elements[1].value) === true)
        {
          setCookie("first",x.elements[1].value);
          document.getElementById("first").style.backgroundColor = "lightgreen"; 
        } else
          {
            document.getElementById("first").style.backgroundColor = "#ef3d47"; 
          };
      validateInput ("text", x.elements[2].value);
      if (validateInput ("text", x.elements[2].value) === true)
        {
          setCookie("last",x.elements[2].value);
          document.getElementById("last").style.backgroundColor = "lightgreen"; 
        } else
          {
            document.getElementById("last").style.backgroundColor = "#ef3d47"; 
          };
      validateInput ("phone", x.elements[4].value);
    console.log(attr);
    }

function myBlurFunction() {
    document.getElementById("email").style.backgroundColor = ""; 
    console.log("myblur");
}



isValid = validateInput(input1, input2);
if (isValid === true) {
  setCookie(input1,input2)
} //console.log("input is invalid, no cookie for you");


//console.log (document.cookie);

//console.log (isValid, input1,  input2);


//Functions Down here
//-----------------------------------------------------------------------------

//creates a cookie with the furthest out expiration date possible on 32 bit systems.
//Shaedrich. et al (2018, June 21). Document.cookie. Retrieved June 30, 2018, from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
function setCookie(cookieKey, cookieValue) {
  document.cookie = cookieKey + "=" + cookieValue;
  document.cookie = "max-age=3153600";
  document.cookie = "path=/privexplorer"
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
      console.log ("inputtype is invalid. No cookie for you")
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
  if (phoneTest === true) {
    setCookie("phone",phone);
    document.getElementById("phone").style.backgroundColor = "lightgreen"; 
  } else
    {
      document.getElementById("phone").style.backgroundColor = "#ef3d47"; 
    }
  return phoneTest;
}


//Validates incoming email to make sure it looks liek an email. Returns Boolean.
function validateEmail (email) {
//Email Address Regular Expression That 99.99% Works. (n.d.). Retrieved June 28, 2018, from http://emailregex.com/
let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailTest = emailPattern.test(email);
if (emailTest === true) {
  setCookie("email",email);
  document.getElementById("email").style.backgroundColor = "lightgreen"; 
} else
  {
    document.getElementById("email").style.backgroundColor = "#ef3d47"; 
  }
return emailTest;
}



//Selectors

//EventLISTENERS
const email = document.querySelector(".Email")

//FUNCTIONS
function ValidateForm() {
  if (email.value.trim() === "") {
    document.querySelector(".error-one").style.display = "block";
  document.querySelector(".err").style.display = "block";
      // email.classList.toggle("border-red")
    document.getElementById("email").style.borderColor = "red";
  
  } else {
  document.querySelector(".error-one").style.display = "none";
    document.querySelector(".err").style.display = "none";
    // email.classList.toggle('Email')
    document.getElementById("email").style.borderColor= "var(--DR-color)"
  }
  
}
function validateEmail(emailId)
{
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{
document.form1.text1;
return true;
}
else
{
document.querySelector(".error-one").style.display = "block";
  document.querySelector(".err").style.display = "block";
      // email.classList.toggle("border-red")
    document.getElementById("email").style.borderColor = "red";
document.form1.text1
return false;
}
}    
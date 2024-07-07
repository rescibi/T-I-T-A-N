function validateForm() {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const number = document.getElementById("num").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;
    

    
   
    
   const emailError = document.getElementById("email-error");
   const passwordError = document.getElementById("password-error");
   const numberError = document.getElementById("number-error");
   const dateError = document.getElementById("date-error");
   const timeError = document.getElementById("time-error");
   const messageError = document.getElementById("message-error");

   

    passwordError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";
    messageError.textContent = "";
     
    

   
    let isValid = true; 

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
if(password === "" || password.length < 8){
  passwordError.textContent = " please enter a password at least 8 character.";
  isValid = false;
}
if(number === "" || number.length > 10 || number.includes("e") ){
numberError.textContent = "please enter your valid number.";
    isValid = false;
}
if(date === "" ){
  dateError.textContent = " please choose the date.";
  isValid = false;
}
if(date === "" ){
  timeError.textContent = "please choose timing.";
  isValid = false;
}
if(message === ""){
  messageError.textContent = "please type some message.";
  isValid = false;

}
if(isValid == true)
        alert("TABLE BOOKED");


   
   return isValid;
}




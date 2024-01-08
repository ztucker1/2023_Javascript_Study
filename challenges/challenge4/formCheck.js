// Gain Access to form elements
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

    const checkName = document.getElementById('name');
    const checkEmail = document.getElementById('email');
    const checkPhone = document.getElementById('phone');

    if(checkName.value === ""){
        checkName.style.backgroundColor = "red";
    }else{
        checkName.style.backgroundColor = "white";
    }
    if(checkEmail.value === ""){
        checkEmail.style.backgroundColor = "red";
    }else{
        checkEmail.style.backgroundColor = "white";
    }
    if(checkPhone.value === ""){
        checkPhone.style.backgroundColor = "red";
    }else{
        checkPhone.style.backgroundColor = "white";
    }
        alert("It is hooked up!");





}
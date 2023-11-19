var emailError = document.getElementById('email-error')
var emailField = document.getElementById('email-field')

function validateEmail(){

    if (emailField.value == ""){
        emailError.innerHTML = "Whoops! It looks like you forgot to add your email";
        emailField.style.border = "1px solid red";
        emailError.style.right = "53%";
        return false;
    }

    else if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please provide a valid email address";
        emailField.style.border = "1px solid red";
        emailError.style.right = "60%";
        return false;
    }


    else{
        emailError.innerHTML = "";
        emailField.style.border= "1px solid green";
        alert("You will be notified");
       
        return true;
    }

}
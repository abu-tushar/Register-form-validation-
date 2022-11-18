const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className ='from-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;

}

// Show success outline

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='from-control success';
}

// Email validation

function isValidEmail(email){
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}

// Password validation
    function isValidPassword(password){
    const re =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}



    

// Even listeners

form.addEventListener('submit', function(e){
    e.preventDefault();


    if(username.value === ''){
        showError(username, 'Username is required' );
    }
    else{
        showSuccess(username);
    }

    
    if(email.value === ''){
        showError(email, 'Email is required' );
    }

    else if(!isValidEmail(email.value)){

        showError(email, 'Email is not valid' );
    }
    else{
        showSuccess(email);
    }

    
    if(password.value === ''){
        showError(password, 'Password is required' );
    }
    else if(!isValidPassword(password.value)){

        showError(password, 'Password is not valid' );
    }

    else{
        showSuccess(password);
    }

    
    if(password2.value === ''){
        showError(password2, 'Confirmation of password is required' );
    }
    else{
        showSuccess(password2);
    }


})
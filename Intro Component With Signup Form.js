var sympols = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,20})$/;
function check(){
    if (window.firstname.value == ''){
        window.firsterror.style.visibility = 'visible';
        window.firstname.style.borderColor = 'hsl(0, 100%, 74%)';
        window.icofirst.style.visibility = 'visible';
    }

    if (window.lastname.value == ''){
        window.lasterror.style.visibility = 'visible';
        window.lastname.style.borderColor = 'hsl(0, 100%, 74%)';
        window.icolast.style.visibility = 'visible';
    }

    if (window.password.value == ''){
        window.passworderror.style.visibility = 'visible';
        window.password.style.borderColor = 'hsl(0, 100%, 74%)';
        window.icopassword.style.visibility = 'visible';
    }

    if (window.emailaddress.value == ''){
        window.emailerror.innerHTML = 'email can not be empty';
        window.emailerror.style.visibility = 'visible';
        window.emailaddress.style.borderColor = 'hsl(0, 100%, 74%)';
        window.icoemail.style.visibility = 'visible';
    }else if (sympols.test(window.emailaddress.value)) {
        window.emailerrorerror.innerHTML = 'please provide a valid email';
        window.error.style.visibility = 'hidden';
    }
    else{
    window.emailerror.innerHTML = 'looks like this is not an email';
    window.emailerror.style.visibility = 'visible';
    window.emailaddress.style.borderColor = 'hsl(0, 100%, 74%)';
    window.icoemail.style.visibility = 'visible';
    }
}
function normalfirst(){
    window.firstname.style.borderColor = 'hsl(246, 25%, 77%)';
    window.firsterror.style.visibility = 'hidden';
    window.icofirst.style.visibility = 'hidden';
}
function normallast(){
    window.lastname.style.borderColor = 'hsl(246, 25%, 77%)';
    window.lasterror.style.visibility = 'hidden';
    window.icolast.style.visibility = 'hidden';
}
function normalemail(){
    window.emailaddress.style.borderColor = 'hsl(246, 25%, 77%)';
    window.emailerror.style.visibility = 'hidden'
    window.icoemail.style.visibility = 'hidden';
}
function normalpassword(){
    window.password.style.borderColor = 'hsl(246, 25%, 77%)';
    window.passworderror.style.visibility = 'hidden';
    window.icopassword.style.visibility = 'hidden';
}
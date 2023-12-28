let passwordfeild = document.querySelector("#passwordInputFeild");
let checkbox = document.querySelector("#checkbox");

checkbox.addEventListener('click',()=>{
    if(passwordfeild.type==="password"){
        passwordfeild.type="text";
    }
    else{
        passwordfeild.type="password";
    }
    
})
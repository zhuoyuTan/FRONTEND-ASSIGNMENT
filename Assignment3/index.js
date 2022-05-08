const signinForm = document.getElementById("signin");
const registerForm = document.getElementById("register");
const loginBtn = document.getElementById("signinBtn");
const registerBtn = document.getElementById("registerBtn");

loginBtn.addEventListener("click",function(){
    signinForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
})

registerBtn.addEventListener("click",function(){
    signinForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
})

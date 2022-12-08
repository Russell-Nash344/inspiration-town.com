const name=document.getElementById("username");
const pass=document.getElementById("password");
const confirmPass=document.getElementById("confirmPassword");
const createAccount=document.getElementById("createAccount");

function setFormMassage(formElement, type, massage){
    const massageElement = formElement.querySelector(".form__massage");

    massageElement.textContent=massage;
    massageElement.classList.remove("form__massage--success", "form__massage--error")
    massageElement.classList.add("form__massage--${type}");
}


document.addEventListener("DOMContentLoaded", () =>{
    const loginForm=document.querySelector("#login");
    const ceateAccountForm=document.querySelector("#createAccount");

    document.querySelector("#linklogin").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        ceateAccountForm.classList.add("form--hidden");
    });
    
    

    document.querySelector("#linksignup").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        ceateAccountForm.classList.remove("form--hidden");
    });
    loginForm.addEventListener("submit", e=>{
        let errorMassage=[]
        if (pass.value.length <7){
            errorMassage.push("Password mustbe longer than 6 characters")
        }
        e.preventDefault();

        setFormMassage("loginForm","error", "Invalid username/password combination.")
    });
});




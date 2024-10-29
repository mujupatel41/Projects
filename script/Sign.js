let LoginData = JSON.parse(localStorage.getItem("LoginData")) || []

document.querySelector("button").addEventListener("click", SignUp)

function SignUp(event){
    let na = document.getElementById("name").value;
    let em = document.getElementById("email").value;
    let pas = document.getElementById("pass").value;
    
    let obj = {
        na,
        em,
        pas
    }
    if(obj.na=="" || obj.email=="" || obj.pas==""){
        alert("Please fill all the details.")
    }
    else{
        LoginData.push(obj)
        localStorage.setItem("LoginData", JSON.stringify(LoginData))
        alert("SignUp Successfull")
    }
}
let LoginData = JSON.parse(localStorage.getItem("LoginData")) || []

    document.querySelector("button").addEventListener("click", SignUp)

    function SignUp(event){
        let em = document.getElementById("email").value;
    
        let obj = {
            em
        }
        if(obj.email==""){
            alert("Please fill all the details.")
        }
        else{
            LoginData.push(obj)
            localStorage.setItem("LoginData", JSON.stringify(LoginData))
            alert("SignUp Successfull")
        }
    }
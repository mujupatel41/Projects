let LoginData = JSON.parse(localStorage.getItem("LoginData"))
document.querySelector("button").addEventListener("click", Log)

function Log(){
    let count = 0;
    LoginData.forEach((elem)=>{
        if(document.getElementById("email").value == elem.em && document.getElementById("pass").value == elem.pas){
            count++
        }
        
    })
    if(count>0){
        alert("Login Sucssessfull")
    }
    else{
        alert("Please Fill Correct Info")
    }
}
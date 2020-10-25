
function entrar(){
    const nome = document.getElementById("inputName").value; // observa o valor de #inputName   
    if(nome == ""){ // condiciona o nome a vazio, caso seja true, executa o codigo abaixo
        const msg = document.querySelector(".msg"); //observa o valor de .labelSubmito 
        msg.setAttribute("id", "msg")
    } 
    else if(nome.length >= 12){
        const msg2 = document.querySelector(".msg2")
        msg2.setAttribute("id", "msg")
    }
    else{
        sessionStorage.setItem("nome", nome);
        window.location = "/user-page.html"
    }
    
}

const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", entrar);
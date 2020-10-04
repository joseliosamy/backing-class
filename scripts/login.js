
function entrar(){
    const nome = document.getElementById("inputName").value; // observa o valor de #inputName
    if(nome == ""){ // condiciona o nome a vazio, caso seja true, executa o codigo abaixo
        const msg = document.querySelector(".msg"); //observa o valor de .labelSubmito 
        msg.setAttribute("id", "msg")
        
    } else{
        window.location = "/user-page.html"
    }
    sessionStorage.setItem("nome", nome);
}

const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", entrar)


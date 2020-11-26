
function entrar(){
    const nome = document.getElementById("inputName").value; // observa o valor de #inputName   
    var msg2 = document.querySelector(".msg2")
    var msg = document.querySelector(".msg");
    var msg3 = document.querySelector(".msg3")
    var boxLoading = document.querySelector("#box-loading")
    if(nome.length == 0){ // condiciona o nome a vazio, caso seja true, executa o codigo abaixo 
        var msg = document.querySelector(".msg"); //observa o valor de .labelSubmito 
        msg.setAttribute("id", "msg")
        msg2.removeAttribute("id")
        msg3.removeAttribute("id")

    }
    // TRATAMENTO DE TAMANHO DO MÍNIMO DO NOME
    else if(nome.length > 0 && nome.length <= 3){
        // REMOÇÃO DO ALERTA DE USER NULOa

        msg3.setAttribute("id", "msg")   
        msg2.removeAttribute("id")
        msg.removeAttribute("id")
    } 

    // TRATAMENTO DE TAMANHO MÁXIMO DO NOME
    else if(nome.length >= 12){

        msg2.setAttribute("id", "msg")
        msg.removeAttribute("id")
        msg3.removeAttribute("id")

       
    }

    // TRATAMENTO DE NÚMEROS NOS NOMES 
    // RELOCATION DO USER SEM SESSION ATIVA
    else{
        boxLoading.style.display = "none"
        if(boxLoading.style.display = "none"){
            boxLoading.style.display = "flex"
        }
        else{
            boxLoading.style.display = "none"
        }
        sessionStorage.setItem("nome", nome);
        window.location = "pages/maintenance.html"

    }
    
}

const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", entrar);
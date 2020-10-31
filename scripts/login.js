
function entrar(){
    const nome = document.getElementById("inputName").value; // observa o valor de #inputName   
    if(nome.length == 0){ // condiciona o nome a vazio, caso seja true, executa o codigo abaixo 
        var msg = document.querySelector(".msg"); //observa o valor de .labelSubmito 
        msg.setAttribute("id", "msg")

        
    }
    // TRATAMENTO DE TAMANHO DO MÍNIMO DO NOME
    else if(nome.length > 0 && nome.length <= 3){
        // REMOÇÃO DO ALERTA DE USER NULOa
        var msg3 = document.querySelector(".msg3")
        msg3.setAttribute("id", "msg")          
    } 

    // TRATAMENTO DE TAMANHO MÁXIMO DO NOME
    else if(nome.length >= 12){
 
        var msg2 = document.querySelector(".msg2")
        msg2.setAttribute("id", "msg")
    }

    // TRATAMENTO DE NÚMEROS NOS NOMES 
    // RELOCATION DO USER SEM SESSION ATIVA
    else{
        sessionStorage.setItem("nome", nome);
        window.location = "/pages/user-page.html"
    }
    
}

const btnSubmit = document.getElementById("btnSubmit")
btnSubmit.addEventListener("click", entrar);
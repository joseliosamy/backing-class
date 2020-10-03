
function entrar(){
    const nome = document.getElementById("inputName").value;
    
    if(nome == ""){
        const labelSubmit = document.querySelector(".labelSubmit");

        return labelSubmit.insertAdjacentHTML("afterend",`<p>Coloque um nome para entrar.</p>`);      
    }
    else{
        window.location = "/user-page.html"
    }
    sessionStorage.setItem("nome", nome);

}

const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", entrar);

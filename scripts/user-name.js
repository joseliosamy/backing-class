function userName(){
    const spanNome = document.getElementById("username")
    if(sessionStorage.getItem("nome")){
        spanNome.textContent = sessionStorage.getItem("nome") + "👨🏼‍💻"; 
    }
}
userName()


function sair(){
    sessionStorage.setItem("nome", "");
    window.location = "index.html"
}
const btnLogout = document.getElementById("logout");
btnLogout.addEventListener("click", sair);

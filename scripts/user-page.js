
// CONFIRMAR SESSÃO NA USER PAGE
function sessionConfirm(){
    if(sessionStorage.getItem("nome") == undefined || sessionStorage.getItem("nome") == ""){
        window.location = "/pages/index.html";
    }
}
sessionConfirm()

////////////////////////////////////////////////////////////////////////

// LOAD DE DROPDOWN
function dropDown(){
    let userSettings = document.querySelector(".user-settings-off");
    userSettings.classList.toggle("user-settings-on")
}
const btnSettings = document.getElementById("btnSettings")
btnSettings.addEventListener("click", dropDown)

////////////////////////////////////////////////////////////////////////


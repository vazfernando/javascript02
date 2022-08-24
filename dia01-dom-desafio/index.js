var usuario = {};
function funcaoDeCliqueNoBotao(){
    usuario = {
        login: document.getElementById("login").value,
        senha: document.getElementById("senha").value,
        cpf: document.getElementById("cpf").value  
    }

console.log("Usuario: ", usuario);

localStorage.setItem("usuario", usuario);
} 



/*
document.getElementById ("buttom").innerHTML = "https://cantina.co/building-a-better-button-in-css/" + window.location.href;
*/


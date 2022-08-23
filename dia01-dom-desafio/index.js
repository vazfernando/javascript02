function funcaoDeCliqueNoBotao(){
var login = document.getElementById("login").value;
var senha = document.getElementById("senha").value;
var cpf = document.getElementById("cpf").value;

console.log("Concatenando Valores" + login + senha + cpf);

localStorage.setItem("login", "senha", "cpf");
} 



/*
document.getElementById ("buttom").innerHTML = "https://cantina.co/building-a-better-button-in-css/" + window.location.href;
*/


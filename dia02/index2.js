function operadoresDeComparacao() {
var numero1 = document.getElementById('numero1').value 
var numero2 = document.getElementById('numero2').value
var resultado1 = document.getElementById('resultado1') 

var ehIgualZero = numero1 % 2 === 0

if (ehIgualZero) {
    resultado1.innerText = 'O número é PAR'
}
else {
    resultado1.innerText = 'O número é ÍMPAR'
}

var diferenteIgual = numero1 === numero2
var resultado2 = document.getElementById('resultado2')

if (diferenteIgual) {
    resultado2.innerText = 'Os números são IGUAIS'
}
else {
    resultado2.innerText = 'Os números são DIFERENTES'
}

var nome = document.getElementById('nome')


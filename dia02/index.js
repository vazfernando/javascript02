function operadoresDeComparacao(){
    var numero01 = document.getElementById('numero01').value;
    var numero02 = document.getElementById('numero02').value;
    console.log(numero01);
    console.log(numero02);
    
    var ParOuImpar = numero01 % 2 === 0
    var resultado = document.getElementById('resultado')

    if (ParOuImpar) {
        resultado.innerHTML = '<p>Esse número é par!</p>'
    }
    else {
        resultado.innerHTML = '<p>Esse número é ímpar!</p>'
    }

    var ehDiferente = numero01 !== numero02;

    if (ehDiferente) {
        resultado.innerHTML += '<p>Esses números são diferentes!</p>'
    }
    else {
        resultado.innerHTML += '<p>Esses números são iguais!</p>'
    }
}

// Desenhar uma calculadora simples e as suas operações. + - * / =


/* 
function operadores() {
    // =

    var numero1 = 1
    var numero2 = 2

    // Atribuição de Adição encurtada
    numero2 +=

}

function operadoresDeComparacao() {
    // == compara se são iguais
    var condicao1 = 2 == 2; // Retorna um true ou false, nesse caso retorna true
}
*/

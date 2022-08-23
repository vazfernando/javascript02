//window.location
//window.document;
//window.history;

/*
var span = document.getElementsByTagName('span');
span[0].innerText = "Estou colocando um texto no meu span";*/
/*var span1 = document.getElementById('span1');
alert(span1.innerText)*/

function funcaoDeCliqueNoBotao() {
    var nome1 = document.getElementById("nome1");
    var idade1 = document.getElementById("idade1");
    var nome2 = document.getElementById("nome2");
    var idade2 = document.getElementById("idade2");

    var media = (parseInt(idade1.value)
                        + parseInt(idade2.value)) / 2;

    console.log("Media de Idades: " + media);
}

// onchange



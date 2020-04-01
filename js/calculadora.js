var botaosomar;
var botaosub;
var botaomult;
var botaodiv;

function aoCarregarPagina() {

    botaosomar = document.getElementById('btnsomar');
    botaosomar.addEventListener('click', somar);
    botaosub = document.getElementById('btnsub');
    botaosub.addEventListener('click', subtrair);
    botaomult = document.getElementById('btnmult');
    botaomult.addEventListener('click', multiplicar);
    botaodiv = document.getElementById('btndiv');
    botaodiv.addEventListener('click', dividir);

}

function somar() {

    var valor1 = document.getElementById("txtvalor1").value;
    var valor2 = document.getElementById("txtvalor2").value;

    var soma = parseFloat(valor1) + parseFloat(valor2);

    var resultado = document.getElementById("lblresultado");

    resultado.textContent = soma;

}


function subtrair() {

    var valor1 = document.getElementById("txtvalor1").value;
    var valor2 = document.getElementById("txtvalor2").value;

    var sub = parseFloat(valor1) - parseFloat(valor2);

    var resultado = document.getElementById("lblresultado");

    resultado.textContent = sub;

}

function multiplicar() {

    var valor1 = document.getElementById("txtvalor1").value;
    var valor2 = document.getElementById("txtvalor2").value;

    var mult = parseFloat(valor1) * parseFloat(valor2);

    var resultado = document.getElementById("lblresultado");

    resultado.textContent = mult;
}

function dividir() {

    var valor1 = document.getElementById("txtvalor1").value;
    var valor2 = document.getElementById("txtvalor2").value;

    var div = parseFloat(valor1) / parseFloat(valor2);

    var resultado = document.getElementById("lblresultado");

    resultado.textContent = div;
}
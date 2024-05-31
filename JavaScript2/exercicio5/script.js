let ipNome1 = document.querySelector("#ipNome1");
let ipAno1 = document.querySelector("#ipAno1");
let ipNome2 = document.querySelector("#ipNome2");
let ipAno2 = document.querySelector("#ipAno2");
let ipNome3 = document.querySelector("#ipNome3");
let ipAno3 = document.querySelector("#ipAno3");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularIdades() {
    let nome1 = String (ipNome1.value);
    let ano1 = Number(ipAno1.value);
    let nome2 = String (ipNome2.value);
    let ano2 = Number(ipAno2.value);
    let nome3 = String (ipNome3.value);
    let ano3 = Number(ipAno3.value);

    let anoAtual = new Date().getFullYear();

    let pessoa1 = { nome: nome1, idade: anoAtual - ano1 };
    let pessoa2 = { nome: nome2, idade: anoAtual - ano2 };
    let pessoa3 = { nome: nome3, idade: anoAtual - ano3 };

    let pessoas = [pessoa1, pessoa2, pessoa3];

    pessoas.sort((a, b) => b.idade - a.idade);

    h3Resultado.innerHTML = 
        "Pessoa mais velha: " + pessoas[0].nome + " : " + pessoas[0].idade + " anos<br>" +
        "Segunda pessoa mais velha: " + pessoas[1].nome + " : " + pessoas[1].idade + " anos<br>" +
        "Terceira pessoa mais velha: " + pessoas[2].nome + " : " + pessoas[2].idade + " anos";
}

btCalcular.onclick = function() {
    calcularIdades();
}
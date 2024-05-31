let ipNumero1 = document.querySelector("#ipNumero1");
let ipNumero2 = document.querySelector("#ipNumero2");
let btComparar = document.querySelector("#btComparar");
let h3comparacao = document.querySelector("#h3comparacao");

btComparar.onclick = function() {
    compararNumeros();

    
}

function compararNumeros() {
    if (Number(ipNumero1.value) > Number(ipNumero2.value)) {
        h3comparacao.textContent = "O Primeiro Numero e Maior"
    }
    else if (Number(ipNumero1.value) === Number(ipNumero2.value)) {
        h3comparacao.textContent = "Os Numeros Sao Iguais"

    }
    else {
        h3comparacao.textContent = "O primeiro Numero e Menor"

    }
    
}
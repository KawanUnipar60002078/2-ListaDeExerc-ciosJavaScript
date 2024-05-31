let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");
let h3ImparPar = document.querySelector("#h3ImparPar");

btVerificar.onclick = function () {
    imparOuPar();
}

function imparOuPar() {
    if (Number(ipNumero.value) % 2 === 0) {
        h3ImparPar.textContent = "O Numero e Par";
        
    } else {
        h3ImparPar.textContent = "O Numero e Impar";
    }

    
}
let ipNotafinal = document.querySelector("#ipNotafinal");
let h3Media = document.querySelector("#h3Media");
let btNotaFinal = document.querySelector("#btNotaFinal");

btNotaFinal.onclick = function () {
    notaFinal();
}

function notaFinal() {
    if (Number(ipNotafinal.value) >= 6) {
        h3Media.textContent = "Aprovado";

    }
   else if (Number(ipNotafinal.value) < 6 && Number(ipNotafinal.value) >= 4) {
        h3Media.textContent = "Precisa Fazer Prova Substitutiva";
    }
    
    else {
        h3Media.textContent = "Reprovado";

    }
}
let ipCotacao = document.querySelector("#ipCotacao");
let btCalcular = document.querySelector("#btCalcular");
let h4Resultado = document.querySelector("#h4Resultado");

function calcularDolar() {
    let cotacaoAtual = Number(ipCotacao.value);
    if (isNaN(cotacaoAtual) || cotacaoAtual <= 0) {
        h4Resultado.innerHTML = "Por favor, insira um valor válido para a cotação.";
        return;
    }

    let cotacao1 = cotacaoAtual * 1.01;
    let cotacao2 = cotacaoAtual * 1.02;
    let cotacao5 = cotacaoAtual * 1.05;
    let cotacao10 = cotacaoAtual * 1.10;

    h4Resultado.innerHTML = "Cotação (1%): " + cotacao1.toFixed(2) + "<br>" +
                            "Cotação (2%): " + cotacao2.toFixed(2) + "<br>" +
                            "Cotação (5%): " + cotacao5.toFixed(2) + "<br>" +
                            "Cotação (10%): " + cotacao10.toFixed(2);
}

btCalcular.onclick = function() {
    calcularDolar();
}

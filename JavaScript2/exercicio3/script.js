let ipNumeroInteiro1 = document.querySelector("#ipNumeroInteiro1");
let ipNumeroInteiro2 = document.querySelector("#ipNumeroInteiro2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularOperacoesMatematicas() {
    let numeroInteiro1 = Number(ipNumeroInteiro1.value);
    let numeroInteiro2 = Number(ipNumeroInteiro2.value);

    let soma = numeroInteiro1 + numeroInteiro2;
    let subtracao = numeroInteiro1 - numeroInteiro2;
    let multiplicacao = numeroInteiro1 * numeroInteiro2;
    let divisao = numeroInteiro1 / numeroInteiro2;

h3Resultado.innerHTML = "Soma: " + soma + "<br>" +
                    "Subtra&ccedil;&atilde;o: " + subtracao + "<br>" +
                    "Multiplica&ccedil;&atilde;o: " + multiplicacao + "<br>" +
                    "Divis&atilde;o: " + divisao + "<br>";

}

btCalcular.onclick = function() {
    calcularOperacoesMatematicas();
}



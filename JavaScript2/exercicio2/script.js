let ipQuantidadePorPessoa = document.querySelector("#ipQuantidadePorPessoa");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularQuantidade() {
    let quantidadePorPessoa = Number (ipQuantidadePorPessoa.value);
    let ovosPorPessoa= 2;
    let queijoPorPessoa = 50;

    let totalOvos = quantidadePorPessoa * ovosPorPessoa;
    let totalQueijo = quantidadePorPessoa * queijoPorPessoa;

    h3Resultado.innerHTML = `Para ${quantidadePorPessoa} pessoa(s), voc&ecirc; vai precisar de:
                             <br>${totalOvos} ovo(s).
                             <br>${totalQueijo} gramas de queijo.`;

}

btCalcular.onclick = function() {
    calcularQuantidade();
}


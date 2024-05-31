let ipSabor1 = document.querySelector("#ipSabor1");
let ipSabor2 = document.querySelector("#ipSabor2");
let ipSabor3 = document.querySelector("#ipSabor3");
let ipSabor4 = document.querySelector("#ipSabor4");
let ipRefrigerantes = document.querySelector("#ipRefrigerantes");
let ipQuantidade = document.querySelector("#ipQuantidade");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularPedido() {
    let sabor1 = String(ipSabor1.value);
    let sabor2 = String(ipSabor2.value);
    let sabor3 = String(ipSabor3.value);
    let sabor4 = String(ipSabor4.value);
    let refrigerantes = Number(ipRefrigerantes.value);

    let precoPizza = 12.00;
    let precoRefrigerante = 7.00;

    let totalPizzas = 4 * precoPizza;
    let totalRefrigerantes = refrigerantes * precoRefrigerante;
    let totalPagar = totalPizzas + totalRefrigerantes;

    h3Resultado.innerHTML = "Sabores escolhidos:<br>" +
                            "Sabor 1: " + sabor1 + "<br>" +
                            "Sabor 2: " + sabor2 + "<br>" +
                            "Sabor 3: " + sabor3 + "<br>" +
                            "Sabor 4: " + sabor4 + "<br><br>" +
                            "Quantidade de refrigerantes: " + refrigerantes + "<br><br>" +
                            "Valor total a pagar: " + totalPagar.toFixed(2);
}

btCalcular.onclick = function() {
    calcularPedido();
}
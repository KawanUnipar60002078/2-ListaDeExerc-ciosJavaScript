let ipValorVendido = document.querySelector("#ipValorVendido");
let ipMetaMinima = document.querySelector("#ipMetaMinima");
let ipMeta = document.querySelector("#ipMeta");
let btCalculoMeta = document.querySelector("#btCalculoMeta");
let h3Percentual = document.querySelector("#h3Percentual");

btCalculoMeta.onclick = function () {
    percentual();
}
function percentual (){
    let metaMinima = (Number(ipValorVendido.value) / Number (ipMetaMinima.value)) * 100;
    let meta = (Number(ipValorVendido.value) / Number (ipMeta.value)) * 100;
   
   if (meta >= 100) {
    h3Percentual.innerHTML = "Voce Atingiu a Meta"
 
    }    
     else if(metaMinima >= 100){
        h3Percentual.innerHTML = "Voce Atingiu a Minima"
         
 
     }
     else {
        h3Percentual.innerHTML = "Voce Nao Atingiu nenhumas das Metas"
    }
    h3Percentual.innerHTML += "<br> Percentual Atingimento Meta " + meta + "%"
    h3Percentual.innerHTML += "<br> Percentual Atingimento Meta Minima " + metaMinima + "%"



}


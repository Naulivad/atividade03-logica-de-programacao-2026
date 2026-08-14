import leia from "readline-sync";

var valorFinal = 0;
var ajudaMedia = 0;
var vendedores = leia.questionInt("Quantos vendedores serao analizados? ");
var maisDeCinco = 0;
var menosDeCinco = 0;
for(var i = 0; i < vendedores; i ++){
    var vendas = leia.questionInt("Digite o valor total der suas vendas: ");
    ajudaMedia ++
    valorFinal += vendas
    if(vendas > 5000){
        maisDeCinco ++
    }else if(vendas <= 5000){
        menosDeCinco ++
    }
}

var media = valorFinal / ajudaMedia

console.log("Quantidade de vendedores que venderam mais de R$ 5.000,00: " + maisDeCinco);
console.log("Quantidade de vendedores que venderam R$ 5.000,00 ou menos: " + menosDeCinco);
console.log("Valor total vendido por todos os vendedores: " + valorFinal);
console.log("Media de vendas: " + media);
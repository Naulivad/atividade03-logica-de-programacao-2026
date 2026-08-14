import leia from "readline-sync"

var valorMedio = 0
var valorX = 0
var opcao;
var valorFinal = 0
var qtd = 0

do{
    

console.log("==== LANCHONETE ====")
console.log("1 - Hambúrguer - R$ 20,00")
console.log("2 - Cachorro-quente - R$ 15,00")
console.log("3 - Refrigerante - R$ 7,00")
console.log("4 - Batata frita - R$ 12,00")
console.log("0 - Finalizar pedido")



opcao = leia.questionInt("Faça seu pedido: ")


if(opcao === 0){


}
else if(opcao === 1) {

    valorFinal += 20
    console.log("Hambúrguer adicionado ao pedido! ")
    qtd ++
}else if(opcao === 2){

    valorFinal += 15
    console.log("Cachorro-quente adicionado ao pedido! ")

    qtd ++
}else if(opcao === 3){

    valorFinal += 7
    console.log("Refrigerante adicionado ao pedido! ")
    qtd ++

}else if(opcao === 4){

    valorFinal += 12
    console.log("Batata frita adicionado ao pedido! ")
qtd ++
}else{
    console.log("")

}
    

}while(opcao != 0)
    
    valorMedio += valorFinal / qtd

    console.log("Pedido Finalizado!!! ")
    console.log(" ")
    console.log("Quantidade total de itens pedidos: " + qtd)
    console.log("Valor total da compra: " + valorFinal + ",00")
    console.log("Valor médio gasto por item: " + valorMedio)

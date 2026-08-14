import leia from "readline-sync"

for(var i = 0; i < 3; i++){
    
    console.log("1 - Gasolina")
    console.log("2 - Etanol")
    console.log("3 - Diesel")
    
    
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
    }
    
    
}
var abastecimentos = leia.questionInt("Quantos abastecimentos seras registrados: ")
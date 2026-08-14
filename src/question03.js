import leia from "readline-sync"

var gaso = 0
var eta = 0
var dise = 0
var abastecimentos = leia.questionInt("Quantos abastecimentos seras registrados: ")
for(var i = 0; i < abastecimentos; i++){

    console.log("1 - Gasolina")
    console.log("2 - Etanol")
    console.log("3 - Diesel")
    
    
    opcao = leia.questionInt("Faça seu pedido: ")
    
    
    if(opcao === 0){
    
    
    }
    else if(opcao === 1) {
    
        valorFinal += 6,20
        console.log(" + gasolina ")
        qtd ++
        gaso ++
    }else if(opcao === 2){
    
        valorFinal += 4,30
        console.log(" + etanol ")
    
        qtd ++
        eta ++
    }else if(opcao === 3){
    
        valorFinal += 5,90
        console.log(" + disel")
        qtd ++
        dise ++
    }
    
    
}

console.log("Quantidade de abastecimentos com gasolina: " + gaso    )
console.log("Quantidade de abastecimentos com etanol: " + eta)
console.log("Quantidade de abastecimentos com disel: " + dise)
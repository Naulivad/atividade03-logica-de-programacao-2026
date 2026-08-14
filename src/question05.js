import leia from "readline-sync"
var finalGols = 0;
var mediag = 0;
var partidas = leia.questionInt("Quantas partidas voce deseja analizar? ")
 for(var i = 0; i < partidas; i++){
    var gols = leia.questionInt("Quantos gols voce fez na partida " + (i+1) + " ")
    finalGols += gols
    mediag ++
 }

 var pontos = finalGols * 50
 var media = finalGols / mediag

 console.log("Quantidade totral de gols: " + finalGols)
 console.log("Pontuaçao: " + pontos)
 console.log("Media de gols: " + media)
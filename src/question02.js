import leia from "readline-sync";

var senha = "4321"
var Tentativas = 0
for(var i = 0; i < 3; i++){
    Tentativas ++
    var senhaTentar = leia.question("Digite a senha: ")
    if(senhaTentar != senha){
        console.log("Senha incorreta! Tente novamente.")
        
    }else{
        console.log("Acesso permitido.")
        i += 3
    }
    console.log("Tentativa: " + Tentativas + " de 3")
    if(Tentativas >= 3){
        console.log("Acesso bloqueado.")
    }

}

console.log("Tentavias utilizadas.: " + Tentativas)
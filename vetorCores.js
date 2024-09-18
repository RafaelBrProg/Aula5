const prompt = require("prompt-sync")()
const cores = ["Azul", "Preto", "Verde", "Vermelho"]
let escolhercor = prompt("Escolha uma cor ")
const index = cores.indexOf(escolhercor)

if (index !== -1) {
    console.log(`Sua cor : ${escolhercor} esta na posição ${index}`)
} else{
    console.log(`A cor ${escolhercor} inserida nao foi encontrada`)
}
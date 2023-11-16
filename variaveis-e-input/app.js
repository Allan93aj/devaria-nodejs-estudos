const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const primeiraConst = "Primeira constante"
console.log(primeiraConst)

let leituraDeCampo
readline.question('informe sua idade:', input => {
    leituraDeCampo = input
    console.log(`o usuario digitou: ${leituraDeCampo}`)
});


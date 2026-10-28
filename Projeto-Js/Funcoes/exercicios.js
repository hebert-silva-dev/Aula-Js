// function saudacao(nome) {
//     alert(`Olá, ${nome}`);
// }

// saudacao("Hebert");

// const areaDoRetangulo = (base , altura) => { return base * altura; }
// alert(areaDoRetangulo(5, 3)); 

// function maior(a, b, c) {
//     let maiorNumero = a;

//     if (b > maiorNumero) maiorNumero = b;

//     if (c > maiorNumero) maiorNumero = c;

//     return maiorNumero;
// }

// console.log(maior(3, 9, 5));

// const celsiusParaFahrenheit = (c) => {
//     if (typeof c !== "number" || Number.isNaN(c)) {
//         return null;
//     } 
//     return c * 9 / 5 + 32;
// }

// console.log(celsiusParaFahrenheit("abc"));

//     function contarVogais(texto){
//         const vogais = "aeiou"
//         let total = 0;

//         for(const letra of texto.toLowerCase()){
//             if (vogais.includes(letra)) {
//                 total++
//             }
//         }
//         return total;
//     }

// console.log(contarVogais(""));

// function ehPolindromo(texto) { // { return texto === inverter() }
//     const normal = texto.toLowerCase();
//     return normal === inverter(normal) 
// }
// function inverter(texto) {
//     let palavraInvertida = "";

//     for (let i = texto.length -1 ; i >= 0 ; i--){
//         palavraInvertida += texto[i];
//     }
//     return palavraInvertida;
// }

// console.log(ehPolindromo("Arara"));

// let saldo = 0;
// let valor;

// function depositar(saldo, valor) {
//     if (valor < 0 || Number.isNaN(valor)) {
//         return `Valor inserido é inválido ${saldo}`;
//     }
//     return (`Saldo atualizado: ${saldo += valor}`);
// }

// function sacar(saldo, valor) {
//     if (valor <= 0 || valor > saldo || Number.isNaN(valor)) {
//         return alert(`Valor inserido não pode ser sacado. Seu saldo é ${saldo}`);
//     }
//     return alert(`Saldo atualizado: ${saldo -= valor}`);
// }



// do {
//     let opcao = Number(prompt("Digiete uma opção: "));
//     switch (opcao) {
//         case 1:
//             let valorDeposito = Number(prompt("Digite um valor para deposito: "));
//             depositar(valorDeposito, saldo);
//             break;

//         case 2:
//             let valorSaque = Number(prompt("Digite um valor para Saque: "));
//             sacar(valorSaque, saldo);
//             break;
//     }
// } while (opcao === 3)

// alert("Pragrama encerrado.");

const operacoes = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? null : a / b),
};

function calcular(a, op, b) {
    const funcao = operacoes[op];
    if (!funcao) {
        return null;
    }
    return funcao(a , b);
}

console.log(calcular(10,"+",10));
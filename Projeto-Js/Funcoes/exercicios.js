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

    function contarVogais(texto){
        const vogais = "aeiou"
        let total = 0;

        for(const letra of texto.toLowerCase()){
            if (vogais.includes(letra)) {
                total++
            }
        }
        return total;
    }

console.log(contarVogais(""));
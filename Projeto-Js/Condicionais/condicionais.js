// const temperatura = 25;

// if (temperatura > 30) {
//     console.log("Está calor!!!");
// }

// console.log("Fim do programa!");

const idade = Number(prompt("Sua idade: "));

if (Number.isNaN(idade) || idade < 0 ) {
    alert("Idade inválida!");
}else{
    if(idade >= 18){
        alert("Você é de maior de idade.");
    }else{
        alert("Você é menor de idade.");
    }
}
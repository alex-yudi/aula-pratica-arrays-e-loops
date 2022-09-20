const compraProdutos = [100, 500, 100, 200, 50];

let menorValor = 0;
let somaCompras = 0;

for (let i = 0; i < compraProdutos.length; i++) { // Soma dos valores do array
    somaCompras += compraProdutos[i];
}


if (compraProdutos.length >= 5) { // Se tiver 5 ou mais produtos
    menorValor = compraProdutos[0];
    for (let i = 0; i < compraProdutos.length; i++) { // Loop pra verificar qual valor de desc.
        if (compraProdutos[i] <= menorValor) {
            menorValor = compraProdutos[i];
        }
    }
}

console.log(somaCompras - menorValor);
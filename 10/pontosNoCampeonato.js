const resultados = ["V", "E", "V", "V", "E"];

let pontuacao = 0;

for (let i = 0; i < resultados.length; i++) {
    if (resultados[i] === "V") {
        pontuacao += 3;
    } else if (resultados[i] === "E") {
        pontuacao += 1;
    }
}
console.log(pontuacao);
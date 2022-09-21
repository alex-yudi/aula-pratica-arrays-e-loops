const notas = [100, 100, 100, 50];

let maiorNota = 0;
let menorNota = 0;
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]; // Somar notas
    if (notas[i] > maiorNota) {  // Descobrir maior nota
        maiorNota = notas[i];
        menorNota = maiorNota;
    }
}
for (let j = 0; j < notas.length; j++) {
    if (notas[j] < menorNota) { // Descobrir menor nota
        menorNota = notas[j];
    }
}


const notaFinal = (somaNotas - maiorNota - menorNota) / (notas.length - 2);
console.log(notaFinal);

let sequencia = ">>>>>>>>";

let contador = 0;

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === ">") {
        contador++;
    } else {
        contador--;
    }
}

if (contador > 6) {
    contador = (contador % 7);
} else if (contador < 0) {
    contador = (contador % 7) + 7;
}


console.log(contador);
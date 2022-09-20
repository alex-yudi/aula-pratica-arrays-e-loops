const disparos = [0, 10, 50, 70, 80, 30];

let contadorDisparosCertos = 0;

for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] > 70) {
        contadorDisparosCertos++;
    }
}
if (contadorDisparosCertos >= 3) {
    console.log(contadorDisparosCertos);
} else {
    console.log("ELIMINADO");
}
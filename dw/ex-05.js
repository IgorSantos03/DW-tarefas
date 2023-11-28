function calculaDist(x1, y1, x2, y2) {
    const parte1 = Math.pow(x2 - x1, 2);
    const parte2 = Math.pow(y2 - y1, 2);
    const distancia = Math.sqrt(parte1 + parte2);
    return distancia;
}
const x1 = 2;
const y1 = 5;
const x2 = 5;
const y2 = 6;
const distancia = calculaDist(x1, y1, x2, y2);
console.log("A distância é: " + distancia);
const a = 5;
const b = 5;
const c = 5;
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c && c === a) {
        console.log("Triângulo Equilátero");
    } else if (a === b || b === c || c === a) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores não formam um triângulo");
}
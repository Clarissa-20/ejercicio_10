let edad = parseFloat(prompt("Ingrese su edad: "));
let boleto = parseFloat(prompt("Ingrese el precio del boleto: "));
let resultadoElement = document.getElementById("resultado");

if (edad <= 12) {
    let descuento = boleto - (boleto * 0.40);
    resultadoElement.innerHTML = `Usted va a pagar: Lps. ${descuento.toFixed(2)}`;
} else if (edad <= 21) {
    let descuento = boleto - (boleto * 0.30);
    resultadoElement.innerHTML = `Usted va a pagar: Lps. ${descuento.toFixed(2)}`;
    
    let alumno = prompt("¿Es usted estudiante? (si/no)").toLowerCase();
    if (alumno === "si") {
        resultadoElement.innerHTML += "<br>Usted obtiene un descuento adicional del 30%.";
    } else if (alumno === "no") {
        resultadoElement.innerHTML += "<br>Usted no obtendrá el descuento adicional, paga el boleto completo.";
    }
} else if (edad >= 60) {
    let descuento = boleto - (boleto * 0.60);
    resultadoElement.innerHTML = `Usted va a pagar: Lps. ${descuento.toFixed(2)}`;
} else {
    resultadoElement.innerHTML = "Usted paga el boleto completo: Lps. 100";
}
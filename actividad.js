op = true;

while(op){
    const ingreso = prompt("Por favor, ingresa un número:");
    let numero;
    
    try {
        numero = parseInt(ingreso);
        if (isNaN(numero)) {
            throw new Error("El valor ingresado no es un número.");
        }
    } catch (error) {
        console.error("Error al convertir el número:", error);
        alert("Por favor, ingresa un número válido.");
        continue;
    }
    
    op = false;
    let factorial = numero;

    for (let i = numero; i > 1; i--) {
        factorial = factorial * (i - 1);
    }
    
    console.log("El factorial del número ingresado es:", factorial);
}

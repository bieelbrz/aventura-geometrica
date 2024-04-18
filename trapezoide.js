function calcularAreaTrapezoideIrregular() {
    var base1 = parseFloat(document.getElementById('base1').value);
    var base2 = parseFloat(document.getElementById('base2').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var area;

    if (base1 && base2 && altura) {
        area = ((base1 + base2) / 2) * altura;
        document.getElementById('resultado').textContent = `Área do Trapézio Irregular: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, forneça informações suficientes para calcular a área do trapézio irregular.";
    }
}

document.getElementById('base1').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById("base2").focus();
    }
});

document.getElementById('base2').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("altura").focus();
    }
});

document.getElementById('altura').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        calcularAreaTrapezoideIrregular();
    }
});


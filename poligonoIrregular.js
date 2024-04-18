function calcularAreaPoligono() {
    var lado = parseFloat(document.getElementById('lado').value);
    var lados = parseFloat(document.getElementById('lados').value);

    var area;

    if (lado && lados && lados > 2) {
        area = (lados * lado * lado) / (4 * Math.tan(Math.PI / lados));
        document.getElementById('resultado').textContent = `Área do Polígono Regular: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, insira informações suficientes para calcular a área do polígono regular.";
    }
}

document.getElementById('lado').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById('lados').focus();
    }
})

document.getElementById('lados').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        calcularAreaPoligono();
    }
})
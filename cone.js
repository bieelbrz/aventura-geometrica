function calcularRaioBase() {
    var altura = parseFloat(document.getElementById('altura').value);
    var volume = parseFloat(document.getElementById('volume').value);

    var raio;

    if (altura && volume) {
        raio = Math.sqrt((3 * volume) / (Math.PI * altura));
        document.getElementById('resultado').textContent = `Raio da Base do Cone: ${raio.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, insira as informações necessárias para calcular o raio da base do cone.";
    }
}

document.getElementById('altura').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById('volume').focus();
    }
});

document.getElementById('volume').addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        calcularRaioBase();
    }
})
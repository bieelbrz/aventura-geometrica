function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var area = base * altura;
    document.getElementById('resultado').textContent = `Área do Retângulo: ${area.toFixed(2)}`;
}

document.getElementById("base").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("altura").focus();
    }
});

document.getElementById("altura").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calcularAreaRetangulo();
    }
});


function calcularAreaCuboide() {
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var area;

    if(comprimento && largura && altura) {
        area = 2 * (comprimento * largura + comprimento * altura + largura * altura);
        document.getElementById('resultado').textContent = `Área do Cubóide: ${area.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, insira as informações necessárias para calcular a área do cubóide.";
    }
}

document.getElementById("comprimento").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById("largura").focus();
    }
});

document.getElementById("largura").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById("altura").focus();
    }
})

document.getElementById("altura").addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        calcularAreaCuboide();
    }
})
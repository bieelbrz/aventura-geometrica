function calcularAreaQuadrado() {
    var lado = parseFloat(document.getElementById('side').value);
    var area = lado * lado;
    document.getElementById('resultado').textContent = `Área do Quadrado: ${area.toFixed(2)}`;
}

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        calcularAreaQuadrado();
    }
});

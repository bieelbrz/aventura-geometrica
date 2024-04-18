function calcularAreaCubo() {
    var aresta = parseFloat(document.getElementById('aresta').value);
    var area = 6 * Math.pow(aresta, 2);
    document.getElementById('resultado').textContent = `Área total do Cubo: ${area.toFixed(2)}`;
}

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        calcularAreaCubo();
    }
});



function calculateArea() {
    var radius = parseFloat(document.getElementById('radius').value);
    var area = Math.PI * Math.pow(radius, 2);
    document.getElementById('result').textContent = `Área: ${area.toFixed(2)}`;
}

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        calculateArea();
    }
});




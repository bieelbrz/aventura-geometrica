
function calcularAreaRomboedro() {
    var lado = parseFloat(document.getElementById('lado').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var diagonalMaior = parseFloat(document.getElementById('diagonalMaior').value);
    var diagonalMenor = parseFloat(document.getElementById('diagonalMenor').value);

    var area;

    if (lado && altura) {
        area = lado * altura;
    } else if  (diagonalMaior && diagonalMenor) {
            area = (diagonalMaior * diagonalMenor) / 2;
        } else {
            document.getElementById('resultado').textContent = "Por favor, forneça informações suficientes para calcular a área do romboedro.";
            return;
        }

        document.getElementById('resultado').textContent = `Área do Romboedro: ${area.toFixed(2)}`;
    }

    document.getElementById("lado").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("altura").focus();
        }
    });

    document.getElementById("altura").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("diagonalMaior").focus();
        }
    });

    document.getElementById("diagonalMaior").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("diagonalMenor").focus();
        }
    });

    document.getElementById("diagonalMenor").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            calcularAreaRomboedro();
        }
    })

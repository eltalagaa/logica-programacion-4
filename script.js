
function fibonacciSeries(n) {
    let series = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            series.push(i);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }

    return series;
}


function mostrarSerieFibonacci() {
    let input = prompt("Ingrese un número: ");

    while (isNaN(input) || input === null || input === "") {
        alert("Ingrese un número válido.");
        input = prompt("Ingrese un número: ");
    }

    const numero = parseInt(input);
    const serie = fibonacciSeries(numero);

    
    console.log("Los numeros Serie de Fibonacci:", serie);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Serie de Fibonacci: ${serie.join(', ')}`;
}

mostrarSerieFibonacci();

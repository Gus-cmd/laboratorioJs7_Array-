document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('numberForm');
    const numberInputsDiv = document.getElementById('numberInputs');
    const resultadosP = document.getElementById('resultados');

    // Crear 10 inputs para los números
    for (let i = 0; i < 10; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.className = 'form-control mb-2';
        input.placeholder = `Número ${i + 1}`;
        input.required = true;
        numberInputsDiv.appendChild(input);
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let numeros = [];
        let positivos = 0;
        let negativos = 0;
        let ceros = 0;

        // Obtener los valores de los inputs
        const inputs = numberInputsDiv.querySelectorAll('input');
        inputs.forEach(input => {
            let valor = parseInt(input.value);
            numeros.push(valor);
            if (valor > 0) {
                positivos++;
            } else if (valor < 0) {
                negativos++;
            } else {
                ceros++;
            }
        });

        // Mostrar los resultados
        resultadosP.textContent = `Positivos: ${positivos}, Negativos: ${negativos}, Ceros: ${ceros}`;
    });
});

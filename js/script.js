// Esperar a que el documento cargue por completo
window.addEventListener("DOMContentLoaded", () => {
    
    // ASIGNACIÓN DE EVENTOS MEDIANTE GETELEMENTBYID
    document.getElementById("btn-calcular-fibo").addEventListener("click", calcularCrecimientoFibonacci);
    document.getElementById("btn-evaluar-prime").addEventListener("click", evaluarSeguridadPin);

});

// --- FUNCIÓN 1: SIMULADOR DE FIBONACCI ---
function calcularCrecimientoFibonacci() {
    // Captura del valor usando getElementById
    const mesesInput = document.getElementById("input-meses").value;
    const cajaResultado = document.getElementById("resultado-fibo");
    
    let meses = parseInt(mesesInput);

    // Validación básica de entrada
    if (isNaN(meses) || meses <= 0) {
        cajaResultado.innerHTML = "<span class='error'>Por favor, ingrese un número válido de meses.</span>";
        return;
    }

    // Variables simples para Fibonacci sin usar vectores (Arrays)
    let a = 0;
    let b = 1;
    let c;
    
    let HTMLResultados = `<h4>Progresión de ramificación por etapas:</h4><ul>`;

    // Ciclo para generar las etapas solicitadas
    for (let i = 1; i <= meses; i++) {
        // En la primera etapa se muestra el primer valor inicial de la naturaleza (1)
        if (i === 1) {
            HTMLResultados += `<li><strong>Etapa ${i}:</strong> 1 unidad de crecimiento.</li>`;
            continue;
        }
        
        c = a + b;
        a = b;
        b = c;

        HTMLResultados += `<li><strong>Etapa ${i}:</strong> ${b} unidades de crecimiento.</li>`;
    }

    HTMLResultados += `</ul><p class='resumen'><strong>Total acumulado en la última etapa:</strong> ${b} unidades.</p>`;
    
    // Mostrar resultados directamente en la página
    cajaResultado.innerHTML = HTMLResultados;
}


// --- FUNCIÓN 2: EVALUADOR DE NÚMEROS PRIMOS ---
function evaluarSeguridadPin() {
    // Captura del valor usando getElementById
    const pinInput = document.getElementById("input-pin").value;
    const cajaResultado = document.getElementById("resultado-prime");

    let numero = parseInt(pinInput);

    // Validación básica de entrada
    if (isNaN(numero) || numero <= 0) {
        cajaResultado.innerHTML = "<span class='error'>Por favor, ingrese un código numérico mayor a 0.</span>";
        return;
    }

    // Algoritmo de verificación de número primo mediante contador de residuos
    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++; // Incrementa si el residuo es cero
        }
    }

    // Renderizado condicional en base a la cantidad de divisores
    if (contador === 2) {
        cajaResultado.innerHTML = `
            <div class='alerta exitosa'>
                <strong>🟢 PIN SEGURO (Número Primo):</strong> El código ${numero} contiene exactamente ${contador} divisores (1 y él mismo). Excelente opción para protección de accesos.
            </div>`;
    } else {
        cajaResultado.innerHTML = `
            <div class='alerta insegura'>
                <strong>🔴 PIN VULNERABLE (Número Compuesto):</strong> El código ${numero} tiene ${contador} divisores. Se recomienda cambiarlo por un número primo (ej. un número cercano como el ${encontrarPrimoCercano(numero)}).
            </div>`;
    }
}

// Función auxiliar opcional para darle un plus de calidad técnica a tu respuesta
function encontrarPrimoCercano(num) {
    let candidato = num + 1;
    while (true) {
        let cont = 0;
        for (let i = 1; i <= candidato; i++) {
            if (candidato % i === 0) cont++;
        }
        if (cont === 2) return candidato;
        candidato++;
    }
}
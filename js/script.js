// Esperar a que el documento cargue por completo
window.addEventListener("DOMContentLoaded", () => {
    
    // ASIGNACIÓN DE EVENTOS MEDIANTE GETELEMENTBYID
    document.getElementById("btn-calcular-fibo").addEventListener("click", calcularCrecimientoFibonacci);
    document.getElementById("btn-evaluar-prime").addEventListener("click", evaluarSeguridadPin);
    document.getElementById("btn-calcular-combinado").addEventListener("click", generarIdentificadoresCombinados);

});

// --- FUNCIÓN 1: SIMULADOR DE FIBONACCI ---
function calcularCrecimientoFibonacci() {
    const mesesInput = document.getElementById("input-meses").value;
    const cajaResultado = document.getElementById("resultado-fibo");
    
    let meses = parseInt(mesesInput);

    if (isNaN(meses) || meses <= 0) {
        cajaResultado.innerHTML = "<span class='error'>Por favor, ingrese un número válido de meses.</span>";
        return;
    }

    let a = 0;
    let b = 1;
    let c;
    
    let HTMLResultados = `<h4>Progresión de ramificación por etapas:</h4><ul>`;

    for (let i = 1; i <= meses; i++) {
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
    cajaResultado.innerHTML = HTMLResultados;
}


// --- FUNCIÓN 2: EVALUADOR DE NÚMEROS PRIMOS ---
function evaluarSeguridadPin() {
    const pinInput = document.getElementById("input-pin").value;
    const cajaResultado = document.getElementById("resultado-prime");

    let numero = parseInt(pinInput);

    if (isNaN(numero) || numero <= 0) {
        cajaResultado.innerHTML = "<span class='error'>Por favor, ingrese un código numérico mayor a 0.</span>";
        return;
    }

    let contador = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }

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

// Función auxiliar para buscar primos cercanos
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


// --- FUNCIÓN 3: ENFOQUE COMBINADO (FIBONACCI + PRIMOS) ---
function generarIdentificadoresCombinados() {
    const limiteInput = document.getElementById("input-limite").value;
    const cajaResultado = document.getElementById("resultado-combinado");
    
    let limite = parseInt(limiteInput);

    if (isNaN(limite) || limite <= 0) {
        cajaResultado.innerHTML = "<span class='error'>Por favor, ingrese un número válido de términos a evaluar.</span>";
        return;
    }

    let a = 0;
    let b = 1;
    let c;
    
    let HTMLResultados = `<h4>Identificadores únicos generados (Primos de Fibonacci):</h4><ul>`;
    let encontrados = 0;

    for (let i = 1; i <= limite; i++) {
        let numeroEvaluar;

        if (i === 1) {
            numeroEvaluar = 1;
        } else {
            c = a + b;
            a = b;
            b = c;
            numeroEvaluar = b;
        }

        // Sub-rutina interna: Verificar si el término actual es Primo
        let divisores = 0;
        for (let j = 1; j <= numeroEvaluar; j++) {
            if (numeroEvaluar % j === 0) {
                divisores++;
            }
        }

        // Validación de primalidad (exactamente dos divisores)
        if (divisores === 2) {
            encontrados++;
            HTMLResultados += `<li><strong>Token #${encontrados}:</strong> Código de seguridad basado en el valor matemático [ ${numeroEvaluar} ]</li>`;
        }
    }

    if (encontrados === 0) {
        HTMLResultados += `<li>No se encontraron números primos dentro del rango analizado de la serie de Fibonacci.</li>`;
    }

    HTMLResultados += `</ul><p class='resumen'><strong>Análisis finalizado:</strong> Se han aislado ${encontrados} identificadores cripto-naturales de un total de ${limite} términos evaluados de la sucesión.</p>`;
    
    cajaResultado.innerHTML = HTMLResultados;
}

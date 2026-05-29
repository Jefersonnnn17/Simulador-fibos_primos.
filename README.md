# Simulador-fibos_primos.
Pagina web hecha con html,css y js enfocada en la resolución de problemas con fibonaccis y números primos 
# Matemáticas Aplicadas: Fibonacci y Números Primos en la Vida Real

Este proyecto consiste en una aplicación web interactiva y responsiva desarrollada en el marco del Desafío Web. El objetivo central de la aplicación es integrar la lógica matemática con el desarrollo frontend, proveyendo soluciones a dos problemáticas del mundo real mediante la implementación de la Sucesión de Fibonacci y la verificación de Números Primos.

La interfaz de usuario ha sido diseñada bajo un enfoque de Modo Oscuro (Dark Mode) con acentos cromáticos fosforescentes de alta fidelidad, garantizando una estética moderna, limpia y una óptima legibilidad de los componentes lógicos.

---

## Enlaces del Proyecto

* **Repositorio del Código Fuente:** [https://github.com/Jefersonnnn17/Simulador-fibos_primos.](https://github.com/Jefersonnnn17/Simulador-fibos_primos.)
* **Despliegue de la Aplicación en la Web:** [https://fibos-primos.netlify.app/](https://fibos-primos.netlify.app/).

---

## Problemáticas Reales y Soluciones Implementadas

El sistema se estructura en dos módulos independientes y complementarios:

### 1. Simulador de Crecimiento Biológico (Sucesión de Fibonacci)
* **Contexto Real:** En el ámbito botánico, diversas especies vegetales organizan la distribución de sus ramas, hojas y estructuras celulares siguiendo la secuencia de Fibonacci. Este patrón optimiza el uso del espacio físico y maximiza la captación de radiación solar.
* **Solución Técnica:** El módulo procesa la cantidad de etapas o meses introducidos por el usuario y proyecta la evolución cuantitativa del crecimiento orgánico acumulado en cada ciclo de manera detallada.

### 2. Evaluador de Seguridad de Pines (Números Primos)
* **Contexto Real:** En el campo de la criptografía y la seguridad informática, los números primos constituyen el fundamento de los algoritmos de cifrado de clave pública. Al poseer únicamente dos divisores exactos, dificultan la descomposición factorial por ataques de fuerza bruta.
* **Solución Técnica:** Permite al usuario verificar la integridad y seguridad de un código de acceso numérico (PIN). El sistema analiza la propiedad de primalidad e indica de manera dinámica si la clave es segura (número primo) o vulnerable (número compuesto), sugiriendo una alternativa matemática óptima cercana en caso de vulnerabilidad.

---

## Especificaciones y Requerimientos Técnicos Cumplidos

La construcción de la aplicación cumple estrictamente con los lineamientos obligatorios estipulados en la rúbrica de evaluación del proyecto:

* **Estructuras de Control Sin Vectores (Arrays):** Los algoritmos de cálculo matemático se ejecutan mediante variables primitivas simples y reasignaciones lógicas continuas, optimizando el rendimiento y prescindiendo del uso de vectores.
* **Interacción Mediante Formularios:** La captura de datos de entrada se gestiona de forma nativa a través de etiquetas `<form>` de HTML, asegurando una semántica estándar.
* **Manipulación Exclusiva del DOM:** El intercambio de datos entre la capa de interfaz y la lógica de programación se realiza de manera estricta mediante el método `document.getElementById()`.
* **Renderizado de Resultados en Pantalla:** El procesamiento de los datos se muestra directamente en contenedores de la interfaz web, omitiendo salidas restrictivas a la consola del navegador o ventanas emergentes del sistema.
* **Diseño Altamente Responsivo:** La interfaz visual se adapta fluidamente a las resoluciones de dispositivos móviles, tablets y ordenadores de escritorio mediante el uso de CSS flexible y Media Queries.

---

## Tecnologías Utilizadas

* **HTML5:** Estructuración semántica del documento, secciones informativas y componentes de formulario.
* **CSS3:** Estilos avanzados de diseño oscuro, tipografía integrada, maquetación responsiva y efectos de iluminación fosforescente mediante propiedades de sombreado (`text-shadow` y `box-shadow`).
* **JavaScript (ES6):** Programación de la lógica iterativa, validación de datos en tiempo de ejecución y manipulación dinámica del DOM.

---

## Estructura de Directorios

El código fuente del proyecto se organiza bajo la siguiente estructura modular:

```text
Simulador-fibos_primos/
├── index.html          # Documento principal y contenido teórico-explicativo
├── css/
│   └── styles.css     # Estilos del entorno oscuro y efectos de acento luminoso
├── js/
│   └── script.js       # Lógica matemática y gestión del DOM con el navegador
└── img/                # Recursos visuales integrados en el contexto
    ├── kttt.png
    └── lolo.png

/*
* Se desea llevar un control de los préstamos que
* realiza una oficina. Se tiene por cada préstamo: nombre
* del cliente, código del préstamo, monto y cantidad de
* meses. Se requiere de un programa que permita el
* registro de esta información, conociendo al principio de
* la ejecución el monto disponible para préstamos y el
* porcentaje de comisión mensual que se cobrará.
* Estructuras de datos recomendadas
* Cl_oficina: montoCaja, porcComisionMensual
* Cl_prestamo: cliente, codigo, prestamo, meses
* Primeros requerimientos
* Los datos entrada vienen en un archivo (con
* import... ver anexo)
* Monto final disponible
* Clientes que pidieron por 2 meses
* Clientes que pidieron el préstamo mínimo
*/

import Cl_Prestamo from "./Cl_Prestamo.js";
import Cl_Oficina from "./Cl_Oficina.js";
import Dt_Prestamos from "./Dt_Prestamos.js";
import Dt_Oficina from "./Dt_Oficina.js";

const oficina = new Cl_Oficina(Dt_Oficina.montoCaja, Dt_Oficina.porcComisionMensual);
const salida1 = document.getElementById("salida1");
const salida2 = document.getElementById("salida2");
const opciones = document.getElementById("opciones");
const sectionOpciones = document.getElementById("sectionOpciones");
const sectionResultados = document.getElementById("sectionResultados");

let nombre
let codigo
let prestamo
let meses

sectionResultados.style.display = "none";

Dt_Prestamos.forEach((prestamo) => oficina.agregarPrestamo(
    new Cl_Prestamo(prestamo.cliente, prestamo.codigo, prestamo.prestamo, prestamo.meses)
));



let agregarPrestamo = () => {
    nombre = prompt("Ingrese el nombre del cliente: ");
    codigo = prompt("Ingrese el codigo del prestamo: ");
    prestamo = prompt("Ingrese el monto del prestamo: ");
    meses = prompt("Ingrese la cantidad de meses: ");
    oficina.agregarPrestamo(new Cl_Prestamo(nombre, codigo, prestamo, meses));
    alert("Prestamo agregado")
}

let eliminarPrestamo = () => {
    let codigo = prompt("Ingrese el codigo del prestamo: ");
    oficina.eliminarPrestamo(codigo);
    alert("Prestamo eliminado");
}

let prestamosPorDosMeses = (oficina, salida) => {
    let prestamos = oficina.prestamosPorDosMeses();
    salida.innerHTML = `Los préstamos por 2 meses son:`;
    prestamos.forEach((prestamo) => {
        salida.innerHTML += `<br>${prestamo.nombre} por un monto de $${prestamo.monto}`;
    });
}

let prestamoMinimo = (oficina, salida) => {
    let prestamos = oficina.prestamoMinimo();
    salida.innerHTML = `El préstamo pequeño es:`;
    prestamos.forEach((prestamo) => {
        salida.innerHTML += `<br>$${prestamo.monto}`;
    });
}

let montoFinalDisponible = (oficina, salida) => {
    let prestamos = oficina.montoFinalDisponible();
    salida.innerHTML = `El monto final disponible es:`;
    prestamos.forEach((prestamo) => {
        salida.innerHTML += `<br>$${prestamo.monto}`;
    });
}

salida1.innerHTML = `<h1>Oficina de prestamos</h1>
                        <h2>Seleccione una opción: </h2>
                        <p>1. Añadir prestamo<br>
                        2. Eliminar prestamo <br>
                        3. Monto final disponible <br>
                        4. Clientes que pidieron por 2 meses <br>
                        5. Clientes que pidieron el préstamo mínimo<br>
                        </p>
                    `;

opciones.onclick = () => {
    let opcion = prompt("Ingrese la opció seleccionada: ");
    switch (opcion) {
        case "1":
            agregarPrestamo();
            break;
        case "2":
            eliminarPrestamo();
            break;
        case "3":
            montoFinalDisponible(oficina, salida2);
            sectionResultados.style.display = "block";
            break;
        case "4":
            prestamosPorDosMeses(oficina, salida2);
            sectionResultados.style.display = "block";
            break;
        case "5":
            prestamoMinimo(oficina, salida2);  
            sectionResultados.style.display = "block";
            break;
    }
}
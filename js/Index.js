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

const oficina = new Cl_Oficina(Dt_Oficina.montoDisponible, Dt_Oficina.porcComisionMensual);
const salida1 = document.getElementById("salida1");
const salida2 = document.getElementById("salida2");
const salida3 = document.getElementById("salida3");
const opciones = document.getElementById("opciones");
const volverInicio = document.getElementById("Inicio");
const sectionOpciones = document.getElementById("sectionOpciones");
const sectionResultados = document.getElementById("sectionResultados");
const sectionTablaPrestamos = document.getElementById("SectiontablaDePrestamos");
const tablaDePrestamos = document.getElementById("tablaPrestamosRegistrados");

Dt_Prestamos.forEach((prestamo) => { 
    oficina.agregarPrestamo(
    new Cl_Prestamo(prestamo.cliente, prestamo.codigo, prestamo.prestamo, prestamo.meses)
)});

let agregarPrestamo = () => {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let codigo = prompt("Ingrese el codigo del prestamo: ");
    let prestamo = prompt("Ingrese el monto del prestamo: ");
    let meses = prompt("Ingrese la cantidad de meses: ");
    let totalPagarPrestamo = Cl_Prestamo().totalPagarPrestamo;
    oficina.agregarPrestamo(new Cl_Prestamo(nombre, codigo, prestamo, meses, totalPagarPrestamo));
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
    
    mostrarSectionResultados();
}

let prestamoMinimo = (oficina, salida) => {
    salida.innerHTML = `El préstamo pequeño es:$${oficina.prestamoMinimo()}`;
    ;
    
    mostrarSectionResultados();
}

let MontoFinalDisponible = (oficina, salida) => {
    salida.innerHTML = `El monto final disponible es: $${oficina.montoFinalDisponible()}`;
    
    mostrarSectionResultados();
}

let mostrarPrestamos = (oficina, salida, tablaDePrestamos) => {
    salida.innerHTML = `Los préstamos son:`;
    oficina.prestamos.forEach((prestamo) => {
        tablaDePrestamos.innerHTML += `<tr>
                                <td>${prestamo.nombre}</td>
                                <td>${prestamo.codigo}</td>
                                <td>${prestamo.monto}</td>
                                <td>${prestamo.meses}</td>
                                <td>$${oficina.totalPagarPrestamo(prestamo)}</td>
                            </tr>
                            `;
    });

    mostrarTablaPrestamos();
}

let modificarPrestamo = (oficina) => {
    let prestamo = [];
    let codigo = -1;
    codigo = prompt("Ingrese el codigo del prestamo: ");
    if (oficina.buscarPrestamo(codigo) == -1) {
        alert("El prestamo no existe");
    } else if (oficina.buscarPrestamo(codigo) != -1) {
        prestamo.nombre = prompt("Ingrese el nombre del cliente: ");
        prestamo.codigo = prompt("Ingrese el codigo del prestamo: ");
        prestamo.monto = prompt("Ingrese el monto del prestamo: ");
        prestamo.meses = prompt("Ingrese la cantidad de meses: ");
        oficina.modificarPrestamo(codigo, prestamo);   
        alert("Prestamo modificado");    
    }
}

let mostrarOpciones = () => {
    sectionOpciones.hidden = false;
    sectionResultados.hidden = true;
    sectionTablaPrestamos.hidden = true;
}

let mostrarTablaPrestamos = () => {
    sectionResultados.style.display = true;
    sectionOpciones.style.display = true;
    sectionTablaPrestamos.hidden = false;
}

let mostrarSectionResultados = () => {
    sectionResultados.hidden = false;
    sectionTablaPrestamos.hidden = true;
    sectionOpciones.hidden = true;
}

salida1.innerHTML = `<h1>Oficina de prestamos</h1>
                        <h2>Seleccione una opción: </h2>
                        <p>
                            1. Añadir prestamo<br>
                            2. Eliminar prestamo <br>
                            3. Monto final disponible <br>
                            4. Clientes que pidieron por 2 meses <br>
                            5. Clientes que pidieron el préstamo mínimo<br>
                            6. Mostrar prestamos <br>
                            7. Modificar prestamos<br>
                        </p>
                    `;

volverInicio.onclick = () => {
    mostrarOpciones();
}
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
            MontoFinalDisponible(oficina, salida2);
            break;
        case "4":
            prestamosPorDosMeses(oficina, salida2);
            break;
        case "5":
            prestamoMinimo(oficina, salida2);  
            break;
        case "6":
            mostrarPrestamos(oficina, salida3, tablaDePrestamos);
            break;
        case "7":
            modificarPrestamo(oficina);
            break;
    }
}

window.load = () => {
    mostrarOpciones();
}
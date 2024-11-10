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

Dt_Prestamos.forEach((prestamo) => oficina.agregarPrestamo(
    new Cl_Prestamo(prestamo.cliente, prestamo.codigo, prestamo.prestamo, prestamo.meses)
));

let montoFinalDisponible = (oficina, salida) => {
    let prestamos = oficina.prestamosPorDosMeses();
    salida.innerHTML = `Los préstamos por 2 meses son:`;
    prestamos.forEach((prestamo) => {
        salida.innerHTML += `<br>${prestamo.nombre} ${prestamo.monto}`;
    });
}

let prestamoMinimo = (oficina, salida) => {
    let prestamos = oficina.prestamoMinimo();
    salida.innerHTML = `El préstamo pequeño es:`;
    prestamos.forEach((prestamos) => {
        salida.innerHTML += `<br>$${prestamos.monto}`;
    });
}

let montFinDispo = (oficina, salida) => {
    let prestamos = oficina.montoFinalDisponible();
    salida.innerHTML = `El monto final disponible es:`;
    prestamos.forEach((prestamos) => {
        salida.innerHTML += `<br>$${prestamos.monto}`;
    });
}

let salida1 = document.getElementById("salida1");
let salida2 = document.getElementById("salida2");
let opciones = document.getElementById("opciones");

salida1.innerHTML = `<p>Seleccione una opción: <br>
                        1. Monto final disponible <br>
                        2. Clientes que pidieron por 2 meses <br>
                        3. Clientes que pidieron el préstamo mínimo
                        </p>
                    `;

opciones.onclick = () => {
    let opcion = prompt("Ingrese la opció seleccionada: ");
    switch (opcion) {
        case "1":
            montFinDispo(oficina, salida2); 
        break; 
        case "2": 
            montoFinalDisponible(oficina, salida2); 
        break;
        case "3": 
            prestamoMinimo(oficina, salida2); 
        break;
    }
}
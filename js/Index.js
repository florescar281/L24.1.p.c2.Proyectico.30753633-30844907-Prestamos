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

let montoFinalDisponible = () => {
    let prestamos = oficina.prestamosPorDosMeses();
    
}

export default class Cl_oficina {
    constructor(montoCaja, porcComisionMensual) {
        this.prestamos = [];
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
    }

    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;
    }

    get montoCaja() {
        return this._montoCaja;
    }  

    
    set porcComisionMensual(porcComisionMensual) {
        this._porcComisionMensual = +porcComisionMensual;
    }

    get porcComisionMensual() {
        return this._porcComisionMensual;
    }

    agregarPrestamo(prestamo) {
        this.prestamos.push(prestamo);
    }

    eliminarPrestamo(codigo) {
        this.prestamos = this.prestamos.findIndex((prestamo) => prestamo.codigo == codigo);
    }

    montoFinalDisponible() {
        let montoPrestamos = 0;
        let montoFinal = 0;
        this.prestamos.forEach((prestamo) => {
            montoPrestamos += Number(prestamo.monto);
        });
        montoFinal = this.montoCaja - montoPrestamos;
        return montoFinal;
    }

    prestamosPorDosMeses() {
        return this.prestamos.filter((prestamo) => prestamo.meses == 2);
    }

    prestamoMinimo() {
        let menor = this.prestamos[0].monto;
        for (let i = 1; i < this.prestamos.length; i++) {
            if (this.prestamos[i].monto < menor) {
                menor = this.prestamos[i].monto;
            }
        }
        return menor;
    }
}
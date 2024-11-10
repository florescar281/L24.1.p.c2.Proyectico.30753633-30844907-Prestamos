export default class Cl_oficina {
    constructor(montoCaja, porcComisionMensual) {
        this.prestamos = [];
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
    }

    set montoCaja(montoCaja) {
        this._montoCaja = montoCaja;
    }

    get montoCaja() {
        return this._montoCaja;
    }  

    
    set porcComisionMensual(porcComisionMensual) {
        this._porcComisionMensual = porcComisionMensual;
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
        for (let i = 0; i < this.prestamos.length; i++) {
            return this.montoCaja -= this.prestamos[i].monto;
        }
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
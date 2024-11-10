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
        return this.montoCaja - this.prestamos.reduce((total, prestamo) => total + prestamo.monto, 0);
    }

    prestamosPorDosMeses() {
        return this.prestamos.filter((prestamo) => prestamo.meses == 2);
    }

    prestamoMinimo() {
        let menor = infinity;
        return this.prestamos.filter((prestamo) => prestamo.monto <= menor
            ? menor = prestamo.monto : menor);
    }
}
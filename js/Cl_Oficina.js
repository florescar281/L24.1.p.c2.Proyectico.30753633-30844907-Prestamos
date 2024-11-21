export default class Cl_oficina {
    constructor(montoDisponible, porcComisionMensual) {
        this.prestamos = [];
        this.montoDisponible = montoDisponible;
        this.porcComisionMensual = porcComisionMensual;
    }

    set montoDisponible(montoDisponible) {
        this._montoDisponible = +montoDisponible;
    }

    get montoDisponible() {
        return this._montoDisponible;
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

    montoFinalDisponible(montoDisponible) {
        this.montoDisponible = +montoDisponible;
        this.prestamos.forEach((prestamo) => {
            this.montoDisponible -= prestamo.monto;
        });
        return this.montoDisponible;
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

    modificarPrestamo(codigo, prestamo) {
        for (let i = 0; i < this.prestamos.length; i++) {
            if (this.prestamos[i].codigo == codigo) {
                this.prestamos[i] = prestamo;
            }
        }
    }

    buscarPrestamo(codigo) {
        return this.prestamos.find((prestamo) => prestamo.codigo == codigo);
    }

    totalPagarPrestamo(prestamo) {
        return prestamo.monto + prestamo.monto * this.porcComisionMensual * prestamo.meses / 100;
    }
}
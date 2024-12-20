export default class Cl_Prestamo{
    constructor(nombre, codigo, monto, meses, totalPagarPrestamo){
        this.nombre = nombre;
        this.codigo = codigo;
        this.monto = monto;
        this.meses = meses;
        this.totalPagarPrestamo = totalPagarPrestamo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get codigo(){
        return this._codigo;
    }

    set monto(monto){
        this._monto = +monto;
    }

    get monto(){
        return this._monto;
    }

    set meses(meses){
        this._meses = +meses;
    }

    get meses(){
        return this._meses;
    }

    set totalPagarPrestamo(totalPagarPrestamo){
        this._totalPagarPrestamo = +totalPagarPrestamo;
    }

    get totalPagarPrestamo(){
        return this._totalPagarPrestamo;
    }
}
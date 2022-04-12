export class Ariproducto {
    _id?: number;
    tipo: string;
    ubicacion: string;
    precio: string;
    ambientes: number;
    dormitorios: number;
    constructor(tipo:string, ubicacion: string, precio: string, ambientes: number, dormitorios: number){
        this.tipo = tipo
        this.ubicacion = ubicacion
        this.precio = precio
        this.ambientes = ambientes
        this.dormitorios = dormitorios
    }
}
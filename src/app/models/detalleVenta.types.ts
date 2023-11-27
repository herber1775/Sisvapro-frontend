import { carroDto } from "./carro.types";
import { ventaDto } from "./venta.types";

export class detalleVentaDto{

    id: number;
    precio: number;
    cantidad: number;
    descripcionC: string;
    subtotal: number;
    venta: ventaDto;
    carro: carroDto;

    constructor(){
        this.id = 0;
        this.precio = 0.0;
        this.cantidad = 0;
        this.descripcionC = "";
        this.subtotal = 0.0;
        this.venta = new ventaDto();
        this.carro = new carroDto();
    }

}  

export class detalleVentaCreateDto{

}

export class detalleVentaUpdateDto{

}

export class detalleVentaDeleteDto{

}

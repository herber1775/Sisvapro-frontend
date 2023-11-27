import { detalleVentaDto } from "./detalleVenta.types";
import { ventaDto } from "./venta.types";

export class VentaTransaction {
    venta:ventaDto;
    detalleVenta:detalleVentaDto[]

    constructor(){
        this.venta = new ventaDto();
        this.detalleVenta = [];
    }
}

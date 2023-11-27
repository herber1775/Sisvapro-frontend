import { clienteDto } from "./cliente.types";
import { EmpleadoDto } from "./empleado.types";

export class ventaDto{
    id: number;
    numserie: string;
    fecha: Date;
    monto: number;
    cliente: clienteDto;
    empleado: EmpleadoDto;


    constructor(){
        this.id = 0;
        this.numserie = "";
        this.fecha = new Date();
        this.monto = 0.0;
        this.cliente = new clienteDto();
        this.empleado = new EmpleadoDto();
    }
} 

export class ventaCreateDto{

}

export class ventaUpdateDto{

}

export class ventaDeleteDto{

}
 
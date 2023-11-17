import { empleadoDto } from "./empleado.types";

export class tipoEmpleadoDto{
    idTipo: number;
    descrip: string;
    empleado:Set<empleadoDto>;
    constructor(){
        this.idTipo=0;
        this.descrip="";
        this.empleado= new Set<empleadoDto>();
    }

}  

export class tipoEmpleadoCreateDto{

}

export class tipoEmpleadoUpdateDto{

}

export class tipoEmpleadoDeleteDto{

}

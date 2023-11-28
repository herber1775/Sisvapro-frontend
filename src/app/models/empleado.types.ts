import { tipoEmpleadoDto } from "./tipoEmpleado.types";

export class empleadoDto{
    idEmpleado!: number;
    dni!: string;
    nom!: string;
    ape!: string;
    tel!: string;
    user!: string;
    clave!: string;
    img!: string;
    objtipo!: tipoEmpleadoDto;

}  

export class empleadoCreateDto{

}

export class empleadoUpdateDto{

}

export class empleadoDeleteDto{

}

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
    tipo!: tipoEmpleadoDto;
    constructor(){
        this.idEmpleado=0;
        this.dni="";
        this.nom="";
        this.ape="";
        this.tel="";
        this.user="";
        this.clave="";
        this.img="";
        this.tipo=new tipoEmpleadoDto;

    }

}  

export class empleadoCreateDto{

}

export class empleadoUpdateDto{

}

export class empleadoDeleteDto{

}

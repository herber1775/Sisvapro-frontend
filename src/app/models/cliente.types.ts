export class clienteDto{
    idCli!:number;
    dni!:string;
    nombre!:string;
    apellido!: string;
    direccion!: string;
    correo!: string;
    // clave: string;
    telefono!: string;
}  

export interface clienteCreateDto{
    dni:string;
    nombre:string;
    apellido: string;
    direccion: string;
    correo: string;
    // clave: string;
    telefono: string;
}

export interface clienteUpdateDto{
    idCli:number
    dni:string;
    nombre:string;
    apellido: string;
    direccion: string;
    correo: string;
    // clave: string;
    telefono: string;
}

export interface clienteDeleteDto{
    idCli:number
}

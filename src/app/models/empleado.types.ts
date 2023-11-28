export class TipoDto {
    idTipo!: number;
    descrip!: string;
  }
  
  export class Authority{
    authority!: string;

  }
  export class EmpleadoDto {
    idEmpleado!: number;
    dni!: string;
    nom!: string;
    ape!: string;
    tel!: string;
    user!: string;
    clave!: string;
    img!: string;
    objTipo!: TipoDto;
    enabled!: boolean;
    password!: string;
    username!: string;
    authorities!: Array<Authority>;
    accountNonLocked!: boolean;
    accountNonExpired!: boolean;
    credentialsNonExpired!: boolean

  }

  export interface EmpleadoCreateDto {
    dni: string;
    nom: string;
    ape: string;
    tel: string;
    user: string;
    clave: string;
    img: string;
    objTipo: TipoDto;
  }

export interface EmpleadoUpdateDto{
    idEmpleado:number;
    dni:String;
    nom:String;
    ape:String;
    tel:String;
    user:String;
    clave:String;
    img:String;
    objTipo: TipoDto
}

export interface EmpleadoDeleteDto{
    idEmpleado:number;
}


    
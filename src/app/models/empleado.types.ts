export interface TipoDto {
    idTipo: number;
    descrip: string;
  }
  
  export interface EmpleadoDto {
    idEmpleado: number;
    dni: string;
    nom: string;
    ape: string;
    tel: string;
    user: string;
    clave: string;
    img: string;
    objTipo: TipoDto
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

export interface empleadoDeleteDto{
    idEmpleado:number;
}


    
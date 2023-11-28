import { marcaDto } from "./marca.types";

export interface TipoDto {
    idmarca: number;
    nomMarca: string;
}

export class carroDto{
    id!: number;
    descripcion!: string;
    modelo!: string;
    origen!: string;
    combustible!: string;
    precio!: number;
    stock!: number;
    anio!: number;
    nroSerie!: string;
    objMarca!: TipoDto;
    //objMarca!: marcaDto;
}  

export class carroCreateDto{
    descripcion!: string;
    modelo!: string;
    origen!: string;
    precio!: string;
    stock!: number;
    anio!: number;
    nroSerie!: string;
    objMarca!: TipoDto;
    combustible!: string;
}

export class carroUpdateDto{
    id!: number;
    descripcion!: string;
    modelo!: string;
    origen!: string;
    precio!: string;
    stock!: number;
    anio!: number;
    nroSerie!: string;
    combustible!: string;
    objMarca!: TipoDto;
}

export class carroDeleteDto{
    id!: number;
}



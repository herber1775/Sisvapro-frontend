import { marcaDto } from "./marca.types";

export class carroDto{
    id!: number;
    modelo!: string;
    origen!: string;
    combustible!: string;
    precio!: number;
    stock!: number;
    anio!: number;
    nroSerie!: string;
    objMarca!: marcaDto;
}  

export class carroCreateDto{

}

export class carroUpdateDto{

}

export class carroDeleteDto{

}

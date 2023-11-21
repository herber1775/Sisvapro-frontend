export interface MarcaDto {
    idmarca: number;
    nomMarca: string;
  }
  

export class carroDto{
    id!:number;
    descripcion!:string;
    modelo!:string;
    origen!:string;
    combustible!:string;
    precio!:string;
    stock!:number;
    anio!:number;
    nroSerie!:string;
    objMarca!: MarcaDto;
}  

export interface carroCreateDto{
    descripcion:string;
    modelo:string;
    origen:string;
    combustible:string;
    precio:string;
    stock:number;
    anio:number;
    nroSerie:string;
    objMarca: MarcaDto;
}

export class carroUpdateDto{

}

export interface carroDeleteDto{
    id:number;
}

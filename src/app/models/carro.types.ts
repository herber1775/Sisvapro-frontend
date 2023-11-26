export interface MarcaDto {
    idmarca: number;
    descripcion: string;
  }
  

export class carroDto{
    id!:number;
    descripcion!:string;
    modelo!:string;
    origen!:string;
    precio!:string;
    stock!:number;
    anio!:number;
    nroSerie!:string;
    objMarca!: MarcaDto;
    combustible!:string;
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

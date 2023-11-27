export interface TipoDto {
    idmarca: number;
    nomMarca: string;
}


export interface carroDto {
    id: number;
    descripcion: string;
    modelo: string;
    origen: string;
    precio: string;
    stock: number;
    anio: number;
    nroSerie: string;
    objMarca: TipoDto;
    combustible: string
}

export interface carroCreateDto {
    descripcion: string;
    modelo: string;
    origen: string;
    precio: string;
    stock: number;
    anio: number;
    nroSerie: string;
    objMarca: TipoDto;
    combustible: string;
}

export interface carroUpdateDto {
    id: number;
    descripcion: string;
    modelo: string;
    origen: string;
    precio: string;
    stock: number;
    anio: number;
    nroSerie: string;
    objMarca: TipoDto;
    combustible: string
}

export interface carroDeleteDto {
    id: number;
}

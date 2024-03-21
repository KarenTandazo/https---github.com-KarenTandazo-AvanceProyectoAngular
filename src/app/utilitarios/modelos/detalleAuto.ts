export interface Vehiculo{
    codigo: string;
    imagen?: string|null; 
    marca: string;
    modelo: string; 
    year?: number; 
    color?: string;  
    precio?: number;  
    kilometraje?: number;  
    score?: number | undefined; 
}

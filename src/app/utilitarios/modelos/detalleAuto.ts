export interface Vehiculo{
    codigo: string;
    foto?: string|null; 
    marca: string;
    modelo: string; 
    anio?: number; 
    color?: string;  
    precio?: number;  
    kilometraje?: number;  
    calificacion?: number | undefined; 
}

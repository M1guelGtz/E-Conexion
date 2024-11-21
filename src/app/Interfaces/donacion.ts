export interface Donacion {
    id_donacion_usuario : number
    cantidad : number
    fecha : string
    tipo_donacion : string
    estatus : string | undefined
    id_evento : number 
    id_donaciones : number | null
}

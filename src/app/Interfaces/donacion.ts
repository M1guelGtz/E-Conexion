export interface Donacion {
    id_donacion_usuario : number
    cantidad : number
    fecha : string
    tipo_donacion : string
    estatus : string | undefined
    id_evento : number | null
    id_donaciones : number | null
}

export interface Donacionput{
    cantidad : number
    tipo_donacion : string
    estatus : string | undefined
    id_evento : number | null
}
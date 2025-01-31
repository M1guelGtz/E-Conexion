export interface Eventos {
nombre: string 
  ubicacion: string 
  descripcion: string 
  estatus: string 
  id_evento_usuario: number 
  id_organizador: number 
  id_donacion: number | null
  estatus_donacion: string
  estatus_donador: string 
  fecha_creacion : string
  fecha_termino: string
  id_eventos:number | null
}
export interface EventoPut {
  id_donacion: number | null;
  descripcion: string;
  fecha_creacion: string;
  fecha_termino: string;
  estatus: string;
  nombre: string;
  ubicacion: string;
  estatus_donacion: string;
  estatus_donador: string;
}
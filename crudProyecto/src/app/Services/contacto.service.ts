import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url='/api';
  constructor(private http: HttpClient) { }

getContactos(){
  return this.http.get(this.url);
}

getunContacto(id:string){
  return this.http.get(this.url+'/'+id);
}

addContacto(contacto:any){
  return this.http.post(this.url, contacto);
}

deleteContacto(id:string){
  return this.http.delete(this.url+'/'+id);
}

editContacto(id:string, contacto:contacto){
  return this.http.put(this.url+'/'+id, contacto);
}

}

export interface contacto{
  idcontactos?:string;
  nombre?:string;
  apellido_paterno?:string;
  apellido_materno?:string;
  email?:string;
  no_tel?:string;
  cliente_idcliente?:string;
}

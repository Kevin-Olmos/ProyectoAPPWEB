import { Component, OnInit } from '@angular/core';
import { ContactoService, contacto } from '../../Services/contacto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contacto: contacto={
    idcontactos:'',
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  email:'',
  no_tel:'',
  cliente_idcliente:''
  }

  constructor(private ContactoService:ContactoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.contacto.idcontactos;

    this.ContactoService.addContacto(this.contacto).subscribe();
    this.router.navigate(['/inicio']);
  }

}

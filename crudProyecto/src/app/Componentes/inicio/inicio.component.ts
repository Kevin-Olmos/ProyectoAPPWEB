import { Component, OnInit } from '@angular/core';
import { ContactoService, contacto } from '../../Services/contacto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarContactos: contacto[] = [];
  constructor(private ContactoService:ContactoService, private router:Router) { }

  ngOnInit(): void {
    this.listarContactos();
  }

  listarContactos(){
    this.ContactoService.getContactos().subscribe(
      res=>{
        console.log(res)
        this.ListarContactos=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string){
    this.ContactoService.deleteContacto(id).subscribe(
      res=>{
        console.log('Equipo eliminado');
        this.listarContactos();
      },
      err => console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit'+id]);
  }

}

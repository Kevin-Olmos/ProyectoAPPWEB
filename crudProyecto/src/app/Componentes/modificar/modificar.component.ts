import { Component, OnInit } from '@angular/core';
import { ContactoService, contacto } from '../../Services/contacto.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  contacto: contacto={
    idcontactos:'',
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  email:'',
  no_tel:'',
  cliente_idcliente:''
  }

  constructor(private ContactoService:ContactoService,
                      private router:Router,
                      private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = this.activateRoute.snapshot.params['id'];
    console.log('ID de entrada ' + id_entrada);

    if(id_entrada){
      this.ContactoService.getunContacto(id_entrada).subscribe(
        res=>{
          this.contacto = res;
          console.log(res);
        },
        err=>console.log(err)
      );
    }

  }

  modificar(){

    this.ContactoService.editContacto(this.contacto.idcontactos!, this.contacto).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );

    this.router.navigate(['/inicio']);
  }



}

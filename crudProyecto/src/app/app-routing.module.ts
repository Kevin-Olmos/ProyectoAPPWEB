import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './Componentes/contactos/contactos.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:ContactosComponent},
  {path:'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

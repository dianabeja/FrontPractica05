import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { InicioComponent } from './Views/inicio/inicio.component';
import { AgregarComponent } from './Views/agregar/agregar.component';
import { EditarComponent } from './Views/editar/editar.component';
import { BuscarComponent } from './Views/buscar/buscar.component';
import { EmpleadosComponent } from './Views/empleados/empleados.component';
import { EliminarComponent } from './Views/eliminar/eliminar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'inicio', component: InicioComponent},
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar', component: EditarComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path : 'eliminar', component: EliminarComponent},
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: '**', redirectTo: '/empleados' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

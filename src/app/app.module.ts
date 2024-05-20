import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './Views/inicio/inicio.component';
import { AgregarComponent } from './Views/agregar/agregar.component';
import { EditarComponent } from './Views/editar/editar.component';
import { BuscarComponent } from './Views/buscar/buscar.component';
import { EmpleadosComponent } from './Views/empleados/empleados.component';
import { EliminarComponent } from './Views/eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    AgregarComponent,
    EditarComponent,
    BuscarComponent,
    EmpleadosComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

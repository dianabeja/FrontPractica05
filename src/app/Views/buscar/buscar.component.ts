import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  constructor(private service: LoginService) {}
  id : any= '';
  empleados: any = [];

  async buscarEmpleado(form: NgForm ,id: number) {
    if (form.valid) {
      const isAuthenticated = true;
      if (isAuthenticated) {
        this.empleados= await this.service.empleadosId(id).toPromise();
      } else {
        console.log('Error');
      }
    }
  }

}

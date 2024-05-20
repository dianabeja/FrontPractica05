import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  constructor(private service: LoginService) {}
  id: any = '';
  mensaje: string = '';

  async eliminarEmpleado(form: NgForm ,id: number) {
    if (form.valid) {
      const isAuthenticated = true;
      if (isAuthenticated) {
        const a= await this.service.deleteempleado(id).toPromise();
        this.mensaje = 'Empleado eliminado';
        console.log(a);
      } else {
        console.log('Error');
      }
    }
  }

}

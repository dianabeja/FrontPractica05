import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  newEmployee: any = {
    clave: 0,
    nombre: '',
    direccion: '',
    phone: ''
  };


  constructor(private service: LoginService) {}

  addEmployee(form: NgForm) {
    if (form.valid) {
      const isAuthenticated = true;
      if (isAuthenticated) {
        this.service.updateempleado(this.newEmployee.clave, this.newEmployee).toPromise();

      } else {
        console.log('Error');
      }
    }
  }
}

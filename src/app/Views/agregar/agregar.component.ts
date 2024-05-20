import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  newEmployee: any = {
    nombre: '',
    direccion: '',
    telefono: ''
  };


  constructor(private service: LoginService ) {}

  async addEmployee(form: NgForm) {
    if (form.valid) {
      const isAuthenticated = true;
      if (isAuthenticated) {
        console.log(this.newEmployee);
        await  this.service.addempleado(this.newEmployee).toPromise();
      } else {
        console.log('Error al agregar empleado');
      }
    }
  }
}

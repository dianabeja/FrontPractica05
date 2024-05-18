import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  newEmployee: any = {
    name: '',
    id: '',
    address: '',
    phone: ''
  };


  constructor(private router: Router) {}

  addEmployee(form: NgForm) {
    if (form.valid) {

      const isAuthenticated = true;

      if (isAuthenticated) {
        this.router.navigate(['/inicio']);
      } else {
        console.log('Error de autenticación');
      }
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  newEmployee: any = {
    name: '',
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

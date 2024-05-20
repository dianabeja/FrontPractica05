import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  showMenu: boolean = false;

  constructor(private service: LoginService, private router: Router) { }

  cerrarSesion() {
    this.service.logout().subscribe(
      (response) => {
        console.log('Logout successful:', response);
      },
      (error) => {
        console.log('Error de autenticación:', error);
      }
    );
    this.router.navigate(['/login']);
}}

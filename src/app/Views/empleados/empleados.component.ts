import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  constructor(private service: LoginService) { }
  empleado: any[] = [];

  async ngOnInit() {
     this.empleado = await this.service.empleados().toPromise();
    console.log(this.empleado);
  }
}

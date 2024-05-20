import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url = environment.url_api + 'login';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  options = { 
    headers: this.headers,
    withCredentials: true // Asegúrate de que las solicitudes incluyan cookies
  };
  headers2 = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options2 = { 
    headers: this.headers2,
    withCredentials: true // Asegúrate de que las solicitudes incluyan cookies
  };

  login(username: string, password: string): Observable<any> {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    return this.http.post(this.api_url, body, this.options);
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.url_api}logout`, {}, this.options);
  }
  empleados(): Observable<any> {
    return this.http.get(`${environment.url_api}api/v1/empleado`, this.options);
  }
  empleadosId(id: number): Observable<any> {
    return this.http.get(`${environment.url_api}api/v1/empleado/${id}`, this.options);
  }
  deleteempleado(id: number): Observable<any> {
    return this.http.delete(`${environment.url_api}api/v1/empleado/${id}`, this.options2);
  }
  updateempleado(id: number, body: any): Observable<any> {
    return this.http.put(`${environment.url_api}api/v1/empleado/${id}`, body, this.options2);
  }
  addempleado(body: any): Observable<any> { 
    return this.http.post(`${environment.url_api}api/v1/empleado/empleado`, body, this.options2);
  }
}

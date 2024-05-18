import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
api_url = environment.url_api + 'login';

constructor(private http: HttpClient) {}
headers= new HttpHeaders({
'Content-Type': 'application/json'
})

option = {headers: this.headers}


login(username: string, password: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.post(this.api_url, { username, password }, { headers });
}
}

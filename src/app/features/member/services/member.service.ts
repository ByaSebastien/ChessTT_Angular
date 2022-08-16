import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  checkUsername(username: string, id: string|null): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('username', username);
    if(id) {
      params = params.append('id', id);
    }
    return this._httpClient.get<boolean>(environment.apiBaseUrl + '/checkUsername', {params});
  }

  checkEmail(email: string, id: string|null): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('email', email);
    if(id) {
      params = params.append('id', id);
    }
    return this._httpClient.get<boolean>(environment.apiBaseUrl + '/checkEmail', {params});
  }

  register(form: any): Observable<void> {
    return this._httpClient.post<void>(environment.apiBaseUrl + '/register', form);
  }
}

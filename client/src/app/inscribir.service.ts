import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InscribirService {
  _url = '';
  constructor(private _http: HttpClient) {
  }

  inscribir(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
Ñ
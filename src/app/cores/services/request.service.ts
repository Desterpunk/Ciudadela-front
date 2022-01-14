import { RequestI } from './../models/request/request.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private urlApi = 'http://localhost:8080/solicitud'

  constructor(
    private http: HttpClient
  ) { }

  getAllRequests(): Observable<RequestI[]>{
    return this.http.get<RequestI[]>(this.urlApi);
  }
}

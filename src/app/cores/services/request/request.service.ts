import { RequestI } from '../../models/request/request.interface'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private urlApi = 'http://localhost:8080/solicitud'
    // "start": "ng serve --proxy-config proxy.conf.json",
  requests: RequestI[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllRequests(): Observable<RequestI[]>{
    return this.http.get<RequestI[]>(this.urlApi);
  }

  addNewRequest(request:RequestI): Observable<RequestI>{
    return this.http.post<RequestI>(`${this.urlApi}/create`, request);
  }


}

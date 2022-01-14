import { Observable } from 'rxjs';
import { ConstructionTypeI } from './../../models/construction-type/constructionType.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionTypeService {
  private urlApi = 'http://localhost:8080/getalltipo'

  constructor(
    private http: HttpClient
  ) { }

  getAllConstructionType(): Observable<ConstructionTypeI[]>{
    return this.http.get<ConstructionTypeI[]>(this.urlApi);
  }
}

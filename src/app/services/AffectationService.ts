import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AffectationHistory } from '../models/affectation-history';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  private apiUrl = 'https://localhost:5167/api/affectations';

  constructor(private http: HttpClient) {}

  // 📌 Get affectations by TPE
  getByTpe(tpeId: string): Observable<AffectationHistory[]> {
    return this.http.get<AffectationHistory[]>(`${this.apiUrl}/${tpeId}`);
  }
}
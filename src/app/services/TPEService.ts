import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tpe } from '../models/tpe';
import { TPEStatus } from '../models/tpe-status';
@Injectable({
  providedIn: 'root'
})
export class TPEService {

  private apiUrl = 'https://localhost:5167/api/tpe';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL
  getAll(): Observable<Tpe[]> {
    return this.http.get<Tpe[]>(this.apiUrl);
  }

  // 📥 GET BY ID
  getById(id: string): Observable<Tpe> {
    return this.http.get<Tpe>(`${this.apiUrl}/${id}`);
  }

  // ➕ CREATE
  create(tpe: Tpe): Observable<Tpe> {
    return this.http.post<Tpe>(this.apiUrl, tpe);
  }

  // ✏️ UPDATE
  update(id: string, tpe: Tpe): Observable<Tpe> {
    return this.http.put<Tpe>(`${this.apiUrl}/${id}`, tpe);
  }

  // ❌ DELETE
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 🔁 ASSIGN TPE
  assign(tpeId: string, userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign?tpeId=${tpeId}&userId=${userId}`, {});
  }

  // ⚙️ CHANGE STATUS
  changeStatus(tpeId: string, status: TPEStatus): Observable<any> {
    return this.http.put(`${this.apiUrl}/status?tpeId=${tpeId}&status=${status}`, {});
  }
}
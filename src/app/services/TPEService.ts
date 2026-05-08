import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TPE } from '../models/tpe';
import { TPEStatus } from '../models/tpe-status';
@Injectable({
  providedIn: 'root'
})
export class TPEService {

  private apiUrl = 'https://localhost:5167/api/TPE';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL
  getAll(): Observable<TPE[]> {
    return this.http.get<TPE[]>(this.apiUrl);
  }

  // 📥 GET BY ID
  getById(id: string): Observable<TPE> {
    return this.http.get<TPE>(`${this.apiUrl}/${id}`);
  }

  // ➕ CREATE
  create(TPE: TPE): Observable<TPE> {
    return this.http.post<TPE>(this.apiUrl, TPE);
  }

  // ✏️ UPDATE
  update(id: string, TPE: TPE): Observable<TPE> {
    return this.http.put<TPE>(`${this.apiUrl}/${id}`, TPE);
  }

  // ❌ DELETE
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 🔁 ASSIGN TPE
  assign(TPEId: string, userId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign?TPEId=${TPEId}&userId=${userId}`, {});
  }

  // ⚙️ CHANGE STATUS
  changeStatus(TPEId: string, status: TPEStatus): Observable<any> {
    return this.http.put(`${this.apiUrl}/status?TPEId=${TPEId}&status=${status}`, {});
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditLog } from '../models/audit-log';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  private apiUrl = 'https://localhost:5167/api/audit';

  constructor(private http: HttpClient) {}

  // 📌 Get all audit logs
  getAll(): Observable<AuditLog[]> {
    return this.http.get<AuditLog[]>(this.apiUrl);
  }

  // 📌 Create audit log
  create(log: AuditLog): Observable<AuditLog> {
    return this.http.post<AuditLog>(this.apiUrl, log);
  }
}
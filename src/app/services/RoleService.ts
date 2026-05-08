import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private apiUrl = 'https://localhost:5167/api/roles';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL ROLES
  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  // 📥 GET ROLE BY ID
  getById(id: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }

  // ➕ CREATE ROLE
  create(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  // ✏️ UPDATE ROLE
  update(id: string, role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.apiUrl}/${id}`, role);
  }

  // ❌ DELETE ROLE
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://localhost:5167/api/users';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL USERS
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // 📥 GET USER BY ID
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // ➕ CREATE USER
  create(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // ✏️ UPDATE USER
  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  // ❌ DELETE USER
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
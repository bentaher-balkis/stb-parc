import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'https://localhost:5167/api/notifications';

  constructor(private http: HttpClient) {}

  // 📌 Get all (temporaire - حسب backend)
  getAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl);
  }

  // 📌 Get notifications by user
  getByUser(userId: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/${userId}`);
  }

  // 📌 Create notification
  create(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, notification);
  }

  // 📌 Mark as read
  markAsRead(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/read/${id}`, {});
  }
}

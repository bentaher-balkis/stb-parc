import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'https://localhost:5167/api/transactions';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL
  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }

  // 📥 GET BY TPE
  getByTpe(tpeId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/tpe/${tpeId}`);
  }

  // ➕ CREATE
  create(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }
}
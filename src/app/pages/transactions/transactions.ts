import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/TransactionServicre';

@Component({
  selector: 'app-transactions',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions implements OnInit {

  transactions: Transaction[] = [];

  transaction: Transaction = {} as Transaction;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {

    this.loadTransactions();

  }

  loadTransactions(): void {

    this.transactionService.getAll().subscribe(res => {

      this.transactions = res;

    });

  }

  saveTransaction(): void {

    this.transactionService.create(this.transaction)
    .subscribe(() => {

      this.loadTransactions();

      this.transaction = {} as Transaction;

    });

  }

}
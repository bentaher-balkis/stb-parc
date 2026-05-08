import { Component } from '@angular/core';
import { UsersService } from '../../services/UserService';
import { TPEService } from '../../services/TPEService';
import { TransactionService } from '../../services/TransactionServicre';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
 usersCount = 0;
  tpesCount = 0;
  transactionsCount = 0;

  constructor(
    private usersService: UsersService,
    private tpeService: TPEService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {

    this.usersService.getAll().subscribe(res => {
      this.usersCount = res.length;
    });

    this.tpeService.getAll().subscribe(res => {
      this.tpesCount = res.length;
    });

    this.transactionService.getAll().subscribe(res => {
      this.transactionsCount = res.length;
    });

  }

}

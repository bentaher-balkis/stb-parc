import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/UserService';
import { TPEService } from '../../services/TPEService';
import { TransactionService } from '../../services/TransactionServicre';
import { RolesService } from '../../services/RoleService';
import { NotificationService } from '../../services/NotificationService';

@Component({
  selector: 'app-statistiques',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './statistiques.html',
  styleUrl: './statistiques.css'
})
export class Statistiques implements OnInit {

  usersCount = 0;
  tpesCount = 0;
  transactionsCount = 0;
  rolesCount = 0;
  notificationsCount = 0;

  constructor(
    private usersService: UsersService,
    private tpeService: TPEService,
    private transactionService: TransactionService,
    private rolesService: RolesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {

    this.loadStatistics();

  }

  loadStatistics(): void {

    this.usersService.getAll().subscribe(res => {
      this.usersCount = res.length;
    });

    this.tpeService.getAll().subscribe(res => {
      this.tpesCount = res.length;
    });

    this.transactionService.getAll().subscribe(res => {
      this.transactionsCount = res.length;
    });

    this.rolesService.getAll().subscribe(res => {
      this.rolesCount = res.length;
    });

    this.notificationService.getAll().subscribe(res => {
      this.notificationsCount = res.length;
    });

  }

}
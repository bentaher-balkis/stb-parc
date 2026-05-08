import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/NotificationService';

@Component({
  selector: 'app-notifications',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class Notifications implements OnInit {

  notifications: Notification[] = [];

  notification: Notification = {} as Notification;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {

    this.loadNotifications();

  }

  loadNotifications(): void {

    this.notificationService.getAll().subscribe(res => {

      this.notifications = res;

    });

  }

  saveNotification(): void {

    this.notificationService.create(this.notification)
    .subscribe(() => {

      this.loadNotifications();

      this.notification = {} as Notification;

    });

  }

}
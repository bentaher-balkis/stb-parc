import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditService } from '../../services/AuditService';
import { AuditLog } from '../../models/audit-log';

@Component({
  selector: 'app-auditlogs',
  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './auditlogs.html',
  styleUrl: './auditlogs.css'
})
export class Auditlogs implements OnInit {

  logs: AuditLog[] = [];

  constructor(private auditService: AuditService) {}

  ngOnInit(): void {

    this.loadLogs();

  }

  loadLogs(): void {

    this.auditService.getAll().subscribe(res => {

      this.logs = res;

    });

  }

}
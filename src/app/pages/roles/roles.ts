import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Role } from '../../models/role';
import { RolesService } from '../../services/RoleService';

@Component({
  selector: 'app-roles',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './roles.html',
  styleUrls: ['./roles.css']
})
export class Roles implements OnInit {

  roles: Role[] = [];

  role: Role = {} as Role;

  isEdit = false;

  constructor(private rolesService: RolesService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {

    this.rolesService.getAll().subscribe(res => {
      this.roles = res;
    });

  }

  saveRole(): void {

    if(this.isEdit) {

      this.rolesService.update(this.role.id, this.role)
      .subscribe(() => {

        this.loadRoles();
        this.resetForm();

      });

    } else {

      this.rolesService.create(this.role)
      .subscribe(() => {

        this.loadRoles();
        this.resetForm();

      });

    }

  }

  editRole(role: Role): void {

    this.role = { ...role };
    this.isEdit = true;

  }

  deleteRole(id: string): void {

    this.rolesService.delete(id)
    .subscribe(() => {
      this.loadRoles();
    });

  }

  resetForm(): void {

    this.role = {} as Role;
    this.isEdit = false;

  }

}
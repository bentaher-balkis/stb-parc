import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/user';
import { UsersService } from '../../services/UserService';

@Component({
  selector: 'app-users',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {

  users: User[] = [];

  user: User = {} as User;

  isEdit = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {

    this.usersService.getAll().subscribe(res => {
      this.users = res;
    });

  }

  saveUser(): void {

    if(this.isEdit) {

      this.usersService.update(this.user.id, this.user)
      .subscribe(() => {

        this.loadUsers();

        this.resetForm();

      });

    } else {

      this.usersService.create(this.user)
      .subscribe(() => {

        this.loadUsers();

        this.resetForm();

      });

    }

  }

  editUser(user: User): void {

    this.user = { ...user };

    this.isEdit = true;

  }

  deleteUser(id: string): void {

    this.usersService.delete(id)
    .subscribe(() => {

      this.loadUsers();

    });

  }

  resetForm(): void {

    this.user = {} as User;

    this.isEdit = false;

  }

}
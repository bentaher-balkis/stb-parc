import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TPEService } from '../../services/TPEService';
import { TPE } from '../../models/tpe';

@Component({
  selector: 'app-tpes',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './tpes.html',
  styleUrls: ['./tpes.css']
})
export class Tpes implements OnInit {

  tpes: TPE[] = [];

  tpe: TPE = {} as TPE;

  isEdit = false;

  constructor(private tpeService: TPEService) {}

  ngOnInit(): void {

    this.loadTpes();

  }

  loadTpes(): void {

    this.tpeService.getAll().subscribe(res => {

      this.tpes = res;

    });

  }

  saveTpe(): void {

    if(this.isEdit) {

      this.tpeService.update(this.tpe.id, this.tpe)
      .subscribe(() => {

        this.loadTpes();

        this.resetForm();

      });

    } else {

      this.tpeService.create(this.tpe)
      .subscribe(() => {

        this.loadTpes();

        this.resetForm();

      });

    }

  }

  editTpe(tpe: TPE): void {

    this.tpe = { ...tpe };

    this.isEdit = true;

  }

  deleteTpe(id: string): void {

    this.tpeService.delete(id)
    .subscribe(() => {

      this.loadTpes();

    });

  }

  resetForm(): void {

    this.tpe = {} as TPE;

    this.isEdit = false;

  }

}
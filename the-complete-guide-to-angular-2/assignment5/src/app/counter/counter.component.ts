import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';
import { CounterModel } from '../models/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  model: CounterModel;
  isAlert: boolean = false;
  animationId: number;

  constructor(private counter: CounterService) {
  }

  ngOnInit(): void {
    this.model = this.counter.model;
    this.counter.update.subscribe(() => {this.onUpdate();});
  }

  onUpdate(): void {
    this.isAlert = true;
    if (this.animationId){
      clearTimeout(this.animationId);
    }
    this.animationId = setTimeout(() => {this.isAlert = false;}, 600);
  }

}

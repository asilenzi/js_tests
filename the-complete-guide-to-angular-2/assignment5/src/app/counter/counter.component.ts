import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  isAlert: boolean = false;
  animationId: number;

  constructor(private counter: CounterService) {
    this.count = this.counter.sum;
  }

  ngOnInit(): void {
    this.counter.new_number.subscribe((new_number: number) => {this.onUpdate(new_number);});
  }

  onUpdate(new_number: number): void {
    this.count = new_number;
    this.isAlert = true;
    if (this.animationId){
      clearTimeout(this.animationId);
    }
    this.animationId = setTimeout(() => {this.isAlert = false;}, 600);
  }

}

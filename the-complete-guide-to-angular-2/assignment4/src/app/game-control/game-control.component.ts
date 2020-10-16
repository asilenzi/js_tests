import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private gameInterval: number;
  @Output('newNumber') newNumberEvent = new EventEmitter<number>();
  private i: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  gameWorker(): void {
    // var num = Math.floor(Math.random() * 10000);
    this.i++;
    this.newNumberEvent.emit(this.i);
  }

  onStart(): void {
    this.gameInterval = setInterval(
      () => this.gameWorker() ,1000);
  }

  onStop(): void {
    clearInterval(this.gameInterval);
  }

}

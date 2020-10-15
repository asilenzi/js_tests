import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: `
  <div class="container">
  <app-warning-alert></app-warning-alert>
  <app-success-alert></app-success-alert>
  </div>`
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

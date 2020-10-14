import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="bg-warning">Warning!</div>',
})
export class WarningAlertComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}

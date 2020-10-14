import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p class="text-warning">Warning!<\p>',
})
export class WarningAlertComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      alert("warning");
    }, 1000);
  }

  ngOnInit(): void {
  }

}

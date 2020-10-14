import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: ''
})
export class SuccessAlertComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      console.log(this);
      alert("success");
    }, 1000);
   }

  ngOnInit(): void {
  }

}

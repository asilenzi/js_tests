import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p class="text-success">Success!<\p>'
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

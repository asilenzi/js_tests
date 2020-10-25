import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

const subs: string[] = ['Basic', 'Advanced', 'Pro'];
const default_subscription: string = 'Advanced';
const startup_model = {email: '', subscription: default_subscription, password: ''};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  subs = subs;
  @ViewChild('signup', { static: false }) signupForm: NgForm;
  model: {email: string, subscription: string, password: string} = startup_model;
  sent_model: {email: string, subscription: string, password: string} = startup_model;
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.valid);
    this.sent_model = {...this.model};
    this.submitted = this.signupForm.submitted;
    this.signupForm.reset();
    this.model = startup_model;
  }

}

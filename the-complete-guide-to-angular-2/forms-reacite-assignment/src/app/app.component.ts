import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray , FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


const PROJECT_STATUSES: string[] = ['Stable', 'Critical', 'Finished'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formStatus: string;
  projectForm: FormGroup;
  output;

  ngOnInit() {
    this.projectForm = new FormGroup(
      {
        'project_name': new FormControl(null, Validators.required, this.projectNameValidator.bind(this)),
        'mail': new FormControl(null, [Validators.required, Validators.email]),
        'project_status': new FormControl(),
        });
    this.projectForm.statusChanges.subscribe(
      (status) => {this.formStatus = status;}
    );

  }

  get project_statuses() {
    return PROJECT_STATUSES;
  }
  
  onSubmit() {
    this.output = {...this.projectForm.value};
    console.log(this.projectForm.value);
  }

  projectNameValidator (control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>( (resolve, reject) => {
      setTimeout(
        () => {
          if (control.value == "Test") {
            resolve({"TestProjectNameInvalid": true});
          }
          resolve(null);
        }
        , 1500);
    });
    return promise;
  }

  getErrors(control_name: string): string
  {
    return JSON.stringify(this.projectForm.get(control_name).errors);
  }

  getModel(): string
  {
    if (!this.output) {
      return '';
    } else {
      return JSON.stringify(this.output);

    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupModel = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    event.preventDefault();

    console.log('signupModel: ' + JSON.stringify(this.signupModel, null, 2));
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginModel = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    event.preventDefault();

    console.log('loginModel: ' + JSON.stringify(this.loginModel, null, 2));
  }

}

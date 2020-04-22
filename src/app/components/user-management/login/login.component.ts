import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import _ from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public sprintUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1200px-Logo_of_Sprint_Nextel.svg.png';
  public loginForm: FormGroup;
  @ViewChild('passwordInput', {static: false}) passwordInput: ElementRef;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required)
    });
  }

  login() {
    console.log(this.passwordInput);
    const copy = _.cloneDeep(this.loginForm);
    this.authenticationService.login(this.loginForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackBarService } from 'src/app/services/content/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public sprintUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1200px-Logo_of_Sprint_Nextel.svg.png';
  public loginForm: FormGroup;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private snackbarService: SnackBarService
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required)
    });
  }

  login() {
    this.authenticationService.login();
  }

}

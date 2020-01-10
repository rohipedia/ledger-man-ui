import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required)
    });
  }

  register() {
    this.authenticationService.register().then(() => {
      this.router.navigate(['landing'], { state: { message :`User with email ${this.registrationForm.get('email').value} registered successfully`} } );
    });
  }
}

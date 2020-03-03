import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from '../components/user-management/login/login.component';
import { LandingComponent } from '../components/user-management/landing/landing.component';
import { RegisterComponent } from '../components/user-management/register/register.component';
import { ForgotPasswordComponent } from '../components/user-management/forgot-password/forgot-password.component';
import { LandingBannersComponent } from '../components/banners/landing-banners/landing-banners.component';
import { MaterialModule } from './material.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'landing' },
    { path: 'landing', component: LandingComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', pathMatch: 'full', redirectTo: 'login' }
    ] }
  ];

@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        LandingBannersComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class UserManagementModule {

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamStructureComponent } from './components/team-structure/team-structure.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { SprintOverviewComponent } from './components/sprint-overview/sprint-overview.component';
import { AuthenticationService } from './services/authentication.service';
import { TeamsService } from './services/teams/teams.service';
import { GstToolsComponent } from './components/gst-tools/gst-tools.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ] },
  { path: 'main', component: HomeComponent, canActivate: [AuthenticationService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'sprint-overview', component: SprintOverviewComponent },
      { path: 'team-structure', component: TeamStructureComponent, 
        resolve: {
          teams: TeamsService
        }
      },
      { path: 'tech-stack', component: TechStackComponent },
      { path: 'gst-tools', component: GstToolsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
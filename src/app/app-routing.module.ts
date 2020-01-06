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


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
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
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
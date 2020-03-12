import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamStructureComponent } from './components/team-structure/team-structure.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { SprintOverviewComponent } from './components/sprint-overview/sprint-overview.component';
import { AuthenticationService } from './services/authentication.service';
import { TeamsService } from './services/teams/teams.service';
import { NewsComponent } from './components/news/news.component';
import { GstToolsComponent } from './components/gst-tools/gst-tools.component';
import { CourseComponent } from './components/tech-stack/course/course.component';
import { OverviewService } from './services/overview/overview.service';
import { AssessmentComponent } from './components/progress/assessment/assessment.component';


const routes: Routes = [
  { path: 'main', component: HomeComponent, canActivate: [AuthenticationService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'sprint-overview', component: SprintOverviewComponent,
        resolve: {
          overview: OverviewService
        }
      },
      { path: 'team-structure', component: TeamStructureComponent, 
        resolve: {
          teams: TeamsService
        }
      },
      { path: 'tech-stack', component: TechStackComponent },
      { path: 'tech-stack/:id', component: CourseComponent },
      { path: 'gst-tools', component: GstToolsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'assessment', component: AssessmentComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
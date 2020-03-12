import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimengModule } from './modules/primeng.module';
import { MaterialModule } from './modules/material.module';
import { UserManagementModule } from './modules/user-management.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamStructureComponent } from './components/team-structure/team-structure.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { SprintOverviewComponent } from './components/sprint-overview/sprint-overview.component';
import { GstToolsComponent } from './components/gst-tools/gst-tools.component';
import { MainBannersComponent } from './components/banners/main-banners/main-banners.component';
import { NewsComponent } from './components/news/news.component';
import { CourseComponent } from './components/tech-stack/course/course.component';
import { AssessmentComponent } from './components/progress/assessment/assessment.component';
import { StreamSelectionComponent } from './components/progress/stream-selection/stream-selection.component';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { StoreModule } from '@ngrx/store';
import { sprintReducer } from './store/sprint.reducer';
import { AssessmentFormComponent } from './components/progress/assessment-form/assessment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidebarComponent,
    TeamStructureComponent,
    TechStackComponent,
    SprintOverviewComponent,
    GstToolsComponent,
    MainBannersComponent,
    NewsComponent,
    CourseComponent,
    SafeHtmlPipe,
    AssessmentComponent,
    StreamSelectionComponent,
    AssessmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    UserManagementModule,
    MaterialModule,
    PrimengModule,
    StoreModule.forRoot({sprint: sprintReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
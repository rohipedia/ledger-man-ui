import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';
import * as sprintActions from './../../store/sprint.action';
import sets from './../../stubs/questions.stubs.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sprintUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1200px-Logo_of_Sprint_Nextel.svg.png';
  public loading: boolean = false;
  
  constructor(private router: Router,
      private authenticationService: AuthenticationService,
      private store: Store<{sprint: any}>
      ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new sprintActions.AddBulkQuestions(sets));
  }

  logout() {
    this.authenticationService.logout();
  }

}

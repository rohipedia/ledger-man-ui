import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sprintUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1200px-Logo_of_Sprint_Nextel.svg.png';
  public loading: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
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
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

}

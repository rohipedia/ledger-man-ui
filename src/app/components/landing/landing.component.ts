import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SnackBarService } from 'src/app/services/content/snack-bar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public sprintUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Logo_of_Sprint_Nextel.svg/1200px-Logo_of_Sprint_Nextel.svg.png';
  public isOptionSelected: boolean = false;
  constructor(private router: Router, private snackbarService: SnackBarService) { }

  ngOnInit() {
    this.handleRouting();
  }

  private isSafe(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  public handleRouting() {
    const checkForRoutes = (url) => {
      this.isOptionSelected = (url !== "/landing");
      const message = this.isSafe(() => this.router.getCurrentNavigation().extras.state.message);
      if (message) {
        this.snackbarService.openSnackbar(message, 'Done');
      }
    }
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationEnd:
          checkForRoutes(event.urlAfterRedirects);
          break;
      }
    });
    checkForRoutes(this.router.url);
  }

  public optionSelected() {
    this.isOptionSelected = true;
  }

}

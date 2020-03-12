import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview/overview.service';
import { ActivatedRoute, Data } from '@angular/router';
import { SnackBarService } from 'src/app/services/content/snack-bar.service';

@Component({
  selector: 'app-sprint-overview',
  templateUrl: './sprint-overview.component.html',
  styleUrls: ['./sprint-overview.component.scss']
})
export class SprintOverviewComponent implements OnInit {

  public showEditor: boolean = false;
  public overviewInnerHtml: string;

  constructor(
    private overviewService: OverviewService,
    private route: ActivatedRoute,
    private snackbarService: SnackBarService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.overviewInnerHtml = data.overview.context.entity.passage;
    });
  }

  onEditOverview() {
    this.showEditor = true;
  }

  onUpdateOverview() {
    this.overviewService.updateOverview(this.overviewInnerHtml).subscribe((response: any) => {
      this.overviewInnerHtml = response.entity.passage;
      this.showEditor = false;
    }, (error) => {
      this.snackbarService.openSnackbar("Save not successful");
    });
  }

}

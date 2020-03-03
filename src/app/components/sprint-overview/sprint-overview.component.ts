import { Component, OnInit } from '@angular/core';
import { OverviewService } from 'src/app/services/overview/overview.service';

@Component({
  selector: 'app-sprint-overview',
  templateUrl: './sprint-overview.component.html',
  styleUrls: ['./sprint-overview.component.scss']
})
export class SprintOverviewComponent implements OnInit {

  public passages: string[] = [];
  public overviews: Overview[] = [];
  public overviewSingleText: string;
  public showEditor: boolean = false;

  constructor(private overviewService: OverviewService) { }

  ngOnInit() {
    this.passages = this.overviewService.getPassages();
    this.createOverviewsMetadata();
  }

  private createOverviewsMetadata(): void {
    this.overviews = this.passages.map((passage: string) => {
      return {
        edit: false,
        passage: passage
      }
    });
    let overviewSingleText = ''; 
    this.overviews.forEach((overview: Overview) => {
      overviewSingleText = overviewSingleText + '<p>' + overview.passage + '</p>';
    });
    this.overviewSingleText = `<div>${overviewSingleText}</div>`;
  }

  onEditPassage(i: number) {
    this.overviews[i].edit = true;
  }

  onUpdatePassage(i: number) {
    this.overviews[i].edit = false;
    this.overviewService.updatePassage(i, this.overviews[i].passage);
  }

  onEditOverview() {
    this.showEditor = true;
  }

  onUpdateOverview() {
    this.showEditor = false;
  }

}

class Overview {
  edit: boolean;
  passage: string;
}
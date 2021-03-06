import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  public streamSelectionForm: FormGroup;
  public assessmentForm: FormGroup;
  public selectedStream: string;
  public isEditable: boolean = false;
  public showStreamSelection: boolean = true;

  constructor(private store: Store<{sprint: any}>) {}

  ngOnInit() {
    this.checkSubscriptions();
  }

  checkSubscriptions(): void {
    this.store.select('sprint').subscribe((data: any) => {
      if (data) {
        this.selectedStream = data.evaluationStream;
      }
    });
  }

}

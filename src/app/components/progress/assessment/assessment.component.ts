import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  streamSelectionForm: FormGroup;
  assessmentForm: FormGroup;
  selectedStream: string;
  isEditable = false;

  constructor(private store: Store<{sprint: any}>) {}

  ngOnInit() {
    this.store.select('sprint').subscribe((data: any) => {
      this.selectedStream = data.evaluationStream;
    })
  }

}

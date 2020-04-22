import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as sprintAction from './../../../store/sprint.action';

@Component({
  selector: 'app-stream-selection',
  templateUrl: './stream-selection.component.html',
  styleUrls: ['./stream-selection.component.scss']
})
export class StreamSelectionComponent implements OnInit {

  @Input('streamSelectionForm') streamSelectionForm;
  stream: string;
  streams: string[] = ['Recommend', 'Activate', 'Integration', 'Test'];
  selected: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store<{ sprint: any }>
  ) {}

  ngOnInit() {
    this.streamSelectionForm = this._formBuilder.group({
      stream: ['Recommend', Validators.required]
    });
    this.checkSubscriptions();
  }

  onNext(): void {
    const stream = this.streamSelectionForm.get('stream').value;
    this.store.dispatch(new sprintAction.UpdateEvaluationStream(stream));
  }

  checkSubscriptions(): void {
    this.store.select('sprint').subscribe((data: any) => {
      if (data && data.evaluationStream) {
        this.selected = true;
        this.streamSelectionForm.patchValue({
          'stream': data.evaluationStream
        })
      }
    });
  }
}
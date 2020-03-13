import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { QuestionSet, QuestionAnswerPairs } from './../../../models/assessment.model';
import * as sprintActions from '../../../store/sprint.action';
import sets from './../../../stubs/questions.stubs.js';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  @Input('selectedStream') selectedStream: string;

  questionSets: QuestionSet[] = sets;
  answersCopy: QuestionAnswerPairs[] = [];
  submitted: boolean = false;

  constructor(private store: Store<{sprint: any}>) { }

  ngOnInit() {
    this.answersCopy = this.questionSets.map((set: QuestionSet) => {
      return {
        serial: set.serial,
        correctAnswer: set.correctAnswer
      }
    });
    this.checkSubscriptions();
  }

  onAnswerSelection(set: QuestionSet, event: number): void {
    set.selectedAnswer = event;
  }

  submit(): void {
    this.questionSets.forEach((set: QuestionSet) => {
      const correctAns = this.answersCopy.find((el: QuestionAnswerPairs) => el.serial === set.serial).correctAnswer;
      set.isCorrect = (correctAns === set.selectedAnswer);
    });
    this.submitted = true;
    this.store.dispatch(new sprintActions.SubmitEvaluation(this.questionSets));
  }

  checkSubscriptions() {
    this.store.select('sprint').subscribe((data: any) => {
      if (data && data.questionSets) {
        this.submitted = data.evaluationSubmitted;
        this.questionSets = data.questionSets;
      }
    });
  }

}
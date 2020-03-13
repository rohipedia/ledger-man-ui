import { Component, OnInit, Input } from '@angular/core';

import { QuestionSet, QuestionAnswerPairs } from './../../../models/assessment.model';
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

  constructor() { }

  ngOnInit() {
    this.answersCopy = this.questionSets.map((set: QuestionSet) => {
      set.selectedAnswer = null;
      return {
        serial: set.serial,
        correctAnswer: set.correctAnswer
      }
    });
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
  }

}
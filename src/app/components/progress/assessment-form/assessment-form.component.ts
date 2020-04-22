import { Component, OnInit, Input, ContentChild, AfterContentInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { QuestionSet, QuestionAnswerPairs } from './../../../models/assessment.model';
import * as sprintActions from '../../../store/sprint.action';
import sets from './../../../stubs/questions.stubs.js';
import { ExcelService } from 'src/app/services/excel/excel.service';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  @Input('selectedStream') selectedStream: string;
  @ContentChild('label', {static: false}) textLabel: ElementRef;

  questionSets: QuestionSet[] = sets;
  answersCopy: QuestionAnswerPairs[] = [];
  showAddQuestionForm: boolean = false;
  submitted: boolean = false;

  constructor(private store: Store<{sprint: any}>,
    private excelService: ExcelService) { }

  ngOnInit() {
    this.checkSubscriptions();
  }

  public onAnswerSelection(set: QuestionSet, event: number): void {
    set.selectedAnswer = event;
  }

  public submit(): void {
    this.questionSets.forEach((set: QuestionSet) => {
      const correctAns = this.answersCopy.find((el: QuestionAnswerPairs) => el.serial === set.serial).correctAnswer;
      set.isCorrect = (correctAns === set.selectedAnswer);
    });
    this.submitted = true;
    this.store.dispatch(new sprintActions.SubmitEvaluation(this.questionSets));
  }

  private checkSubscriptions() {
    this.store.select('sprint').subscribe((data: any) => {
      if (data) {
        if (data.questionSets) {
          this.submitted = data.evaluationSubmitted;
          this.questionSets = data.questionSets;
        }
        if (data.evaluationStream) {
          this.questionSets = this.questionSets.filter(
            (questionSet: QuestionSet) => questionSet.stream.toLowerCase() === data.evaluationStream.toLowerCase());
        }  
      }
      // the answer copy should be create in the end of the checkSubscriptions() 
      // because the questionSets have to be altered before
      this.createAnswerCopy();      
    });
  }
  
  private createAnswerCopy() {
    let serialNumber = 1;
    this.questionSets.forEach((questionSet: QuestionSet) => {
      questionSet.serial = serialNumber;
      serialNumber++;
    });
    this.answersCopy = this.questionSets.map((set: QuestionSet) => {
      return {
        serial: set.serial,
        correctAnswer: set.correctAnswer
      }
    });
  }

  public addQuestionSets(): void {
    this.showAddQuestionForm = !this.showAddQuestionForm;
  }

  public downloadTemplate() {
    this.excelService.downloadExcel()
  }

}
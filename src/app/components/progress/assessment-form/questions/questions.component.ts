import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { ExcelService } from 'src/app/services/excel/excel.service';
import { QuestionSet } from 'src/app/models/assessment.model';
import * as sprintActions from '../../../../store/sprint.action';
import { SnackBarService } from 'src/app/services/content/snack-bar.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  
  private uploadedQuestions: QuestionSet[] = [];
  public disableUpload: boolean = true;

  @ViewChild('fileUploadEl', {static: false}) fileUploadEl: ElementRef;

  constructor(
    private excelService: ExcelService,
    private store: Store<{sprint: any}>,
    private snackbarService: SnackBarService) { }

  ngOnInit() {
  }

  public onFileChange(event) {
    this.excelService.onFileUpload(event).then((data) => {
      this.parseQuestions(data.Sheet1);
      this.disableUpload = false;
    })
  }

  public uploadQuestions(): void {
    this.store.dispatch(new sprintActions.AddBulkQuestions(this.uploadedQuestions));
    this.snackbarService.openSnackbar("Questions uploaded");
    this.disableUpload = true;
    this.fileUploadEl.nativeElement.value = "";
  }

  private parseQuestions(questions: any[]): void {
    const getCorrectAnswer = (option: string): number => {
      switch(option.toLowerCase()) {
        case 'a':
          return 1;
        case 'b':
          return 2;
        case 'c':
          return 3;
        case 'd':
          return 4;
      }
    }
    this.uploadedQuestions = questions.map((question: any) => {
      return {
        'serial': question.serial,
        'question': question.question,
        'answers': [
          { option: 1, label: question.a }, { option: 2, label: question.b },
          { option: 3, label: question.c }, { option: 4, label: question.d }
        ],
        'correctAnswer': getCorrectAnswer(question.correct),
        'isCorrect': false,
        'selectedAnswer': null,
        'stream': question.stream
      }
    });
  }

}

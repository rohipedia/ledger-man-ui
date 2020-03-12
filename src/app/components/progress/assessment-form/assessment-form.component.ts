import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import sets from './../../../stubs/questions.stubs.js';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent implements OnInit {

  @Input('assessmentForm') assessmentForm: FormGroup;
  @Input('selectedStream') selectedStream: string;

  questionSets: QuestionSet[] = sets;

  constructor() { }

  ngOnInit() {
    this.initSets();
    
  }

  initSets() {
    let sets = new FormArray([]);
    this.questionSets.forEach((questionSet: QuestionSet) => {
      let answers = new FormArray([]);
      questionSet.answers.forEach(answer => {
        answers.push(
          new FormControl(answer)
        );
      });
      sets.push(
        new FormGroup({
          'question': new FormControl(questionSet.question, null),
          'answers': answers
        })
      )
    });
    this.assessmentForm = new FormGroup({
      'sets': sets
    });
    console.log(this.assessmentForm);
  }

}

class QuestionSet {
  serial: number;
  question: string;
  answers: any[];
  answer: number;
}
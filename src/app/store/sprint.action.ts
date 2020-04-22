import { Action } from '@ngrx/store';
import { QuestionSet } from '../models/assessment.model';

export const UPDATE_EVALUATION_STREAM = 'UPDATE_EVALUATION_STREAM';
export const SUBMIT_EVALUATION = 'SUBMIT_EVALUATION';
export const ADD_BULK_QUESTIONS = 'ADD_BULK_QUESTIONS';

export class UpdateEvaluationStream implements Action {
    readonly type = UPDATE_EVALUATION_STREAM;

    constructor(public payload: string) {}
}

export class SubmitEvaluation implements Action {
    readonly type = SUBMIT_EVALUATION;

    constructor(public payload: any) {}
}

export class AddBulkQuestions implements Action {
    readonly type = ADD_BULK_QUESTIONS;

    constructor(public payload: QuestionSet[]) {}
}

export type allActions = UpdateEvaluationStream | SubmitEvaluation | AddBulkQuestions;
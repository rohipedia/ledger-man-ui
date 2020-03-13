import { Action } from '@ngrx/store';

export const UPDATE_EVALUATION_STREAM = 'UPDATE_EVALUATION_STREAM';
export const SUBMIT_EVALUATION = 'SUBMIT_EVALUATION';

export class UpdateEvaluationStream implements Action {
    readonly type = UPDATE_EVALUATION_STREAM;

    constructor(public payload: string) {}
}

export class SubmitEvaluation implements Action {
    readonly type = SUBMIT_EVALUATION;

    constructor(public payload: any) {}
}

export type allActions = UpdateEvaluationStream | SubmitEvaluation;
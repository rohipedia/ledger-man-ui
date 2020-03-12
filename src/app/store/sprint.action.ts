import { Action } from '@ngrx/store';

export const UPDATE_EVALUATION_STREAM = 'UPDATE_EVALUATION_STREAM';

export class UpdateEvaluationStream implements Action {
    readonly type = UPDATE_EVALUATION_STREAM;

    constructor(public payload: string) {}
}

export type allActions = UpdateEvaluationStream;
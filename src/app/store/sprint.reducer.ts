import * as sprintAction from './sprint.action';

const initialState = {
    evaluationStream: '',
    evaluationSubmitted: false,
    questionSets: null
}

export function sprintReducer(state = initialState, action: sprintAction.allActions) {
    switch (action.type) {
        case sprintAction.UPDATE_EVALUATION_STREAM:
            return {
                ...state,
                evaluationStream: action.payload
            }
        case sprintAction.SUBMIT_EVALUATION:
            return {
                ...state,
                evaluationSubmitted: true,
                questionSets: action.payload
            }
    }
}
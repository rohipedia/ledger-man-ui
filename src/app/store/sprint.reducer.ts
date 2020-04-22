import * as sprintAction from './sprint.action';

const initialState = {
    isAdmin: false,
    evaluationStream: '',
    evaluationSubmitted: false,
    questionSets: []
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
        case sprintAction.ADD_BULK_QUESTIONS:
            return {
                ...state,
                questionSets: [...state.questionSets, ...action.payload]
            }
    }
}
import * as sprintAction from './sprint.action';

const initialState = {
    evaluationStream: ''
}

export function sprintReducer(state = initialState, action: sprintAction.allActions) {
    switch (action.type) {
        case sprintAction.UPDATE_EVALUATION_STREAM:
            return {
                ...state,
                evaluationStream: action.payload
            }
    }
}
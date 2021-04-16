import {
    RECEIVE_CATEGORIES,
    RECEIVE_TODOS,
    REQUEST_CATEGORIES,
    REQUEST_TODOS,
    TodosComponentActionsTypes,
    TodosComponentState
} from "./types"

const initialState: TodosComponentState = {
    todos: [],
    categories: [],
    loading: false,
}

export function todosComponentReducer(
    state = initialState,
    action: TodosComponentActionsTypes
): TodosComponentState {
    switch (action.type) {
        case REQUEST_TODOS:
            return {
                ...state,
                loading: true,
            }
        case RECEIVE_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case REQUEST_CATEGORIES:
            return {
                ...state,
                loading: true,
            }
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }
        default:
            return state
    }
}

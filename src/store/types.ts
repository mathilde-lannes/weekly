import {Todo} from "../models/todo";
import {Category} from "../models/category";

export interface TodosComponentState {
    todos: Todo[],
    categories: Category[],
    loading: boolean
}

export const REQUEST_TODOS = "REQUEST_TODOS"
export const RECEIVE_TODOS = "RECEIVE_TODOS"
export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES"
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

interface RequestTodosAction {
    type: typeof REQUEST_TODOS
}

interface ReceiveTodosAction {
    type: typeof RECEIVE_TODOS
    payload: Todo[]
}

interface RequestCategoriesAction {
    type: typeof REQUEST_CATEGORIES
}

interface ReceiveCategoriesAction {
    type: typeof RECEIVE_CATEGORIES
    payload: Category[]
}

export type TodosComponentActionsTypes =
    | RequestTodosAction
    | ReceiveTodosAction
    | RequestCategoriesAction
    | ReceiveCategoriesAction

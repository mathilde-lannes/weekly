import {
    RECEIVE_CATEGORIES,
    RECEIVE_TODOS,
    REQUEST_CATEGORIES,
    REQUEST_TODOS,
    TodosComponentActionsTypes
} from "./types";
import {Todo} from "../models/todo";
import sendAsync from '../message-control/renderer';
import {GET_ALL_CATEGORIES, GET_ALL_TODOS, INSERT_CATEGORY, INSERT_TODO} from "../models/channels";
import {v4 as uuidv4} from 'uuid';
import {Category} from "../models/category";

function requestTodos(): TodosComponentActionsTypes {
    return {
        type: REQUEST_TODOS,
    }
}

function receiveTodos(todos: Todo[]): TodosComponentActionsTypes {
    return {
        type: RECEIVE_TODOS,
        payload: todos,
    }
}

export function getAllTodos(): any {
    return function (dispatch, getState) {
        dispatch(requestTodos())
        return sendAsync(GET_ALL_TODOS)
            .then((doc) => {
                dispatch(receiveTodos(doc || []))
            })
            .catch((err) => {
                dispatch(receiveTodos([]))
            })
    }
}

export function insertTodo(name, category): any {
    return function (dispatch, getState) {
        const newTodo = new Todo(uuidv4(), name, category)
        return sendAsync(INSERT_TODO, newTodo)
            .then((doc) => {
                dispatch(receiveTodos(getState().todos.concat(newTodo)))
            })
            .catch((err) => {
                console.log("🔥 [insertTodo] err ->", err)
            })
    }
}

function requestCategories(): TodosComponentActionsTypes {
    return {
        type: REQUEST_CATEGORIES,
    }
}

function receiveCategories(categories: Category[]): TodosComponentActionsTypes {
    return {
        type: RECEIVE_CATEGORIES,
        payload: categories,
    }
}

export function getAllCategories(): any {
    return function (dispatch, getState) {
        dispatch(requestCategories())
        return sendAsync(GET_ALL_CATEGORIES)
            .then((doc) => {
                dispatch(receiveCategories(doc || []))
            })
            .catch((err) => {
                console.log("🔥 [getAllCategories] err ->", err)
                dispatch(receiveCategories([]))
            })
    }
}

export function insertCategory(name, color): any {
    return function (dispatch, getState) {
        const newCategory = new Category(uuidv4(), name, color)
        return sendAsync(INSERT_CATEGORY, newCategory)
            .then((doc) => {
                dispatch(receiveCategories(getState().categories.concat(newCategory)))
            })
            .catch((err) => {
                console.log("🔥 [insertCategory] err ->", err)
            })
    }
}

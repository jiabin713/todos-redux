import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_TOGGLE,
  SET_VISIBILITY_FILTER
} from './actionTypes';

let nextTodoId = 0

export const todoAdd = (text) => {
  return {
    type: TODO_ADD,
    id: nextTodoId++,
    text
  }
}

export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    id
  }
}

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

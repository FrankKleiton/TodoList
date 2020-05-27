// Action Types
export const ADD_TODO = 'ADD_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Filter's Constants
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

// Action Creators
export const addTodo = text => (
  {
    type: ADD_TODO,
    text,
  }
)

export const toggleTodo = index => (
  {
    type: TOGGLE_TODO,
    index
  }
)

export const setVisibilityFilter = filter => (
  {
    type: SET_VISIBILITY_FILTER,
    filter
  }
)
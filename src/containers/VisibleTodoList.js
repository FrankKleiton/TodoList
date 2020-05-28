import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, VisibilityFilters } from '../actions'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_ACTIVE:
      return todos.filter(todos => !todos.completed)
    case SHOW_COMPLETED:
      return todos.filter(todos => todos.completed)
    case SHOW_ALL:

    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: index => dispatch(toggleTodo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
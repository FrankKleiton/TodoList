import React from 'react'
import PropTypes from 'prop-types'

/**
 * Personal Observations
 *
 * When TodoList add the Todo beetween it's <></> and pass
 * the state through the props, the todo is unaware of the
 * state of TodoList or from where that props came from. This
 * is very similar to the Solid Liskov Principle in Object Oriented
 * Programming, where a object passed as argument of a class's method
 * has no dependency to the class itself. The class and that object
 * has no implementation knowleadge from each other.
 *
 * In redux, the only ones to access the state are the containers
 * components, the presentation components receive that state through
 * props and are unaware from where this data came from. Thanks to that
 * design principle described above.
 */
const Todo = ({ text, completed, onClick }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={onClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
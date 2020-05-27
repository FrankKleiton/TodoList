import React from 'react';
import TodoList from './components/TodoList'

function App() {
  return (
    <TodoList todos={[{
      id: 1,
      text: 'Study Redux',
      completed: false
    }]}  onTodoClick={() => console.log('Hello World!')} />
  );
}

export default App;

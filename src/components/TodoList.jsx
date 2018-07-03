import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({todos, todoToggle, todoRemove}) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            onClick={()=>todoToggle(todo.id)}
            text={todo.text}
            completed={todo.completed}
          />
        )
      })}
    </ul>
  )
}

export default TodoList;

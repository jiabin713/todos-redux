import React from 'react';

const TodoItem = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  )
}

export default TodoItem;

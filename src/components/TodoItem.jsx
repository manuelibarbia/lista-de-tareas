import React from 'react'

export default function TodoItem({ todo, toggleTodo }) {
    const {id, task, completed} = todo;

    const handlerTodoClick = () => {
      toggleTodo(id);
    }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handlerTodoClick} />
      {task}
    </li>
  )
}
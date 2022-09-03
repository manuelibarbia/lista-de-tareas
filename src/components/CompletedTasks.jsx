import React from 'react'

export function CompletedTasks(todos) {
    let completedTasks = (todos.filter((todo) => !todo.completed).length);

    let divToReturn = '';
    if (completedTasks === 0) {
        divToReturn = 'No hay tareas por completar'
    }
  return (
    <div>{divToReturn}</div>
  )
}

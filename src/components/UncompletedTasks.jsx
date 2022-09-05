import React from 'react'

export function UncompletedTasks({todos}) {
    let uncompletedTasks = (todos.filter((todo) => !todo.completed).length);
    let divToReturn = '';
    if (uncompletedTasks === 0) {
        divToReturn = 'No hay tareas por completar'
    }
    else {
      divToReturn = `Tareas por completar: ${uncompletedTasks}`
    }
  return (
    <div>{divToReturn}</div>
  )
}

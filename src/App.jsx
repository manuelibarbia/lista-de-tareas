import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css'

// import { CompletedTasks } from './components/CompletedTasks';
import { TodoList } from './components/TodoList';

const KEY = 'todoApp.todos'

export function App() {
    const [todos, setTodos] = useState([
        {id: 1, task: 'Tarea 1', completed: false}]);

        const todoTaskRef = useRef();

        useEffect(()=> {
            const storedTodos = JSON.parse(localStorage.getItem(KEY))
            if(storedTodos) {
                setTodos(storedTodos);
            }
        }, []);

        useEffect(() => {
            localStorage.setItem(KEY, JSON.stringify(todos));
        }, [todos]);

        const toggleTodo = (id) => {
            const newTodos = [...todos];
            const todo = newTodos.find((todo) => todo.id === id);
            todo.completed = !todo.completed;
            setTodos(newTodos);
        }   

        const handlerTodoAdd = () => {
            const task = todoTaskRef.current.value;
            if (task === '') return;

            setTodos((prevTodos => {
                return [...prevTodos, {id: uuidv4(), task, completed: false}]
            }))
            
            todoTaskRef.current.value = null;
        };

        const handlerClearAll = () => {
            const newTodos = todos.filter((todo) => !todo.completed);
            setTodos(newTodos);
        }

    return (
    <>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={todoTaskRef} type='text' placeholder='Nueva tarea' className='new-task' />
        <button onClick={handlerTodoAdd} className='buttons'>Añadir</button>
        <button onClick={handlerClearAll} className='buttons'>Eliminar</button>
        <div className='unfinished-tasks' >Tareas por terminar: {todos.filter((todo) => !todo.completed).length}</div>
        {/* <CompletedTasks todos={todos} /> */}
    </>
    );
}
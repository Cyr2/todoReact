import propTypes from 'prop-types';
import React from 'react'

export default function Todo({todo, changeTodoStatus, removeTodo}) {
    return (
        <li key={todo.id}>
        <input type="checkbox" checked={todo.done} id={todo.id} onChange={changeTodoStatus} />
        {todo.text}
        <button onClick={()=>{removeTodo(todo.id)}}>X</button>
        </li>
    )
}

Todo.propTypes = {
    todo: propTypes.object.isRequired,
    changeTodoStatus: propTypes.func.isRequired,
    removeTodo: propTypes.func.isRequired
}
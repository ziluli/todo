import React from 'react'
import Todo from './Todo';

const TodoList = ({todos,onTodoClick,onTodoClear}) => (
    <ul>
        {todos.map(todo => 
            <Todo
                key = {todo.id}
                {...todo}
                onClick = {() => onTodoClick(todo.id)}
                onClear = {() => onTodoClear(todo.id)}
            />
        )}
    </ul>
)

export default TodoList;
import React from 'react';

const Todo = ({text,onClick,completed,onClear}) => (
    <div style={{display:'flex'}}>
        <li
            onClick = {onClick}
            style = {{
                textDecoration:completed?'line-through':'none',
                color:completed?'black':'blue',
            }}>
            <input 
            type="checkbox" 
            style = {{checked:completed?"checked":"none"}}/>            
            {text}
        </li>
        &nbsp;&nbsp;
        <button onClick = {onClear}>删除</button>
    </div>
)

export default Todo;
import React from 'react';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit = {e => {
                e.preventDefault();
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ""
            }}>

                <input placeholder="请输入事项内容" ref = {node => {
                    input = node
                }}/>

                <button type="submit">
                    增加
                </button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo)
export default AddTodo;
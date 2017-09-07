import React from 'react'
import {connect} from 'react-redux'
import {clearCompleted} from '../actions'
import {allChecked} from '../actions'

const Link = ({children,sum,onClick,allChecked}) => {
    return(
        <div>
            <input type="checkbox" 
            onClick = {() => allChecked()}/>
            <span>{children}</span>已完成 /
            <span>{sum}</span>总数
            &nbsp;
            <button
                onClick = {
                    e => {
                    e.preventDefault();
                    onClick()
                }
            }>清除已完成</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    children:state.todos.filter(todo=>todo.completed).length,
    sum:state.todos.length
})

const mapDispatchToProps = {
    onClick : clearCompleted,
    allChecked : allChecked
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
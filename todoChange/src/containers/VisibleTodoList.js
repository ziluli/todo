import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'
import {deleteTodo} from '../actions'

const mapStateToProps = (state) => ({
    todos:state.todos
})

const mapDispatchToProps = {
    onTodoClick : toggleTodo,
    onTodoClear : deleteTodo,
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
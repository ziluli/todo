const todos = (state = [],action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo,completed:!todo.completed}
                :todo
            )
        case 'DELETE_TODO':
            return state.filter(todo => 
                todo.id !== action.id
            )
        case 'CLEAR_COMPLETED':
            return state.filter(t=>!t.completed);

        case "ALL_CHECKED":
        return state.map(todo => 
            ({...todo, completed: !todo.completed}))

        default:
            return state
    }
}
export default todos
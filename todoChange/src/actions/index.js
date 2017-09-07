let nextTodoId = 0;

export const addTodo = (text) =>({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
})

export const setVisibilityFilter = (filter) =>({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const clearCompleted = (id) =>({
    type: 'CLEAR_COMPLETED',
    id
})

export const allChecked = (id) =>({
    type:'ALL_CHECKED',
    id
})
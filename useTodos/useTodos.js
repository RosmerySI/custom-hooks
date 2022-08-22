import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = []

const init = () =>{
    return JSON.parse ( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const todosCount= todos.length;
    
    
    const pendingTodosCount = todos.filter( todo => !todo.done).length
    

    const handleNewTodo = (newTodo) =>{
        
        const action={
            type:'Add Todo',
            payload: newTodo,
        }
        dispatch(action);
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id,
        })
    }
    const handleToggleTodo = (id) => {
        console.log({id});
        dispatch({
            type:'Toggle Todo',
            payload: id

        })
    }
  return {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  }
}

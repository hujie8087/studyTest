import React, { FC, useEffect, ReactElement, useCallback, useReducer } from 'react'
import Input from './Input'
import List from './List'
import todoReducer from './reducer'
import { ACTION_TYPE, IState, ITodo } from './typing'

const initialState: IState = {
    todoList:[]
}

const TodoList: FC = (): ReactElement => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = useCallback((todo: ITodo): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo,
        })
    }, [])

    const removeTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id,
        })
    }, [])

    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id,
        })
    }, [])

    useEffect(() => {
        let todolist = JSON.parse(localStorage.getItem('todolist') || '[]') 
        dispatch({
            type:ACTION_TYPE.INIT_TODO,
            payload:todolist
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('todolist',JSON.stringify(state.todoList)) 
        return () => { }
    }, [state.todoList])

    return <div>
        <Input todoList={state.todoList} addTodo={addTodo} />
        <List todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo}></List>
    </div>
}

export default TodoList


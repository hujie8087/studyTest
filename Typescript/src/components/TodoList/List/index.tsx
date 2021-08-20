import React, { FC, ReactElement } from 'react'
import { ITodo } from '../typing'
import Item from './Item'

interface IProps {
    todoList:ITodo[];
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void;
}

const TodoList:FC<IProps> = ({todoList,toggleTodo,removeTodo}):ReactElement =>{
    console.log(todoList);
    
    return (
        <div>
            {
                todoList && todoList.map(todo=>{
                   return <Item todo={todo} key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo}></Item>
                })
            }
        </div>
    )
}

export default TodoList

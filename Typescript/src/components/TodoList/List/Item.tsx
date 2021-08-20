import React, { FC, ReactElement } from "react";
import { ITodo } from "../typing";

interface IProps {
    todo:ITodo;
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void;
}

const Item:FC<IProps> = ({todo,toggleTodo,removeTodo}):ReactElement=>{
    const {id,content,complated} = todo;

    return <div className='todo-item'>
        <input type="checkbox" checked={complated} onChange={()=>{toggleTodo(id)}} />
        <span style={{textDecoration:complated?'line-through':''}}>{content}</span>
        <button type='button' onClick={()=>{removeTodo(id)}}>删除</button>
    </div>
}

export default Item
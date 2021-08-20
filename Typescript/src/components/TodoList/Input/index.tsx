import React, { FC, useRef, ReactElement } from "react";
import { ITodo } from "../typing";

interface IProps {
    addTodo:(todo:ITodo)=>void;
    todoList:ITodo[];
}

const Input: FC<IProps> = ({ addTodo,todoList}): ReactElement => {

    const InputRef = useRef<HTMLInputElement>(null)

    const addItem = ():void =>{
        const val:string = InputRef.current!.value.trim();
        console.log(InputRef);
        
        if (val.length) {
            const isExist = todoList.find(item=>item.content === val)
            if (isExist) {
                alert('已存在该项，请重新填写！')
                return
            }
        }else{
            alert('请输入待办事项')
            return
        }
        addTodo({
            id:new Date().getTime(),
            content:val,
            complated:false,
        })
        InputRef.current!.value = ''
    }

    return <div>
        <input type="text" placeholder='请输入待办事项' ref={InputRef} />
        <button onClick={ addItem }>增加</button>
    </div>
}

export default Input
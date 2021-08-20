export interface ITodo {
    id:number;
    content:string;
    complated:boolean;
}

export interface IState{
    todoList:ITodo[]
}

export interface IAction {
    type:ACTION_TYPE,
    payload:ITodo | ITodo[] | number
}

export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO = 'removeTodo',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODO = 'init_todo'
}
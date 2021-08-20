import { ACTION_TYPE, IAction, IState, ITodo } from "./typing";

function todoReducer(state:IState,action:IAction):IState {
    const {type,payload} = action;
    switch (type) {
        case ACTION_TYPE.INIT_TODO:
            return {
                ...state,
                todoList:payload as ITodo[]
            }
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todoList:[...state.todoList,payload as ITodo]
            }
        case ACTION_TYPE.REMOVE_TODO:
            return {
                ...state,
                todoList:state.todoList.filter(item=>item.id !== payload)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return{
                ...state,
                todoList:state.todoList.map(item=>{
                    return item.id === payload ? 
                        { ...item,
                        complated: !item.complated}

                    : item
                })
            }
        default:
            return state
                
            
    }
}


export default todoReducer
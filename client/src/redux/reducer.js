import { ADDING } from "./actionTypes";

const initialState = {
    tasks:[]
}

const reducer = (state=initialState, action) => {
     switch (action.type) {
        case ADDING:
            return {...state , tasks:[...state.tasks,action.newTask]}
     
        default:
            return state;
     }
}
export default reducer;
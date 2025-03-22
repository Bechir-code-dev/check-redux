import { ADDING, DELETING, DOING, FILTERING } from "./actionTypes";

export const adding = (newTask)=> {
    return { type: ADDING, newTask}
};
export const deleting = (id) =>{
    return {type:DELETING , id}
};
export const doing = (id) =>{
    return {type:DOING , id}
};
export const editing = (id , description) =>{
    return {type:DOING , payload:{id,description} }
};
export const filtering = ()=> {
    return{type:FILTERING}
};
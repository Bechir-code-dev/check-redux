import { ADDING, DELETING, DOING, EDITING, FILTERING } from "./actionTypes";

export const adding = (newTask)=> {
    return { type: ADDING, newTask}
};
export const deleting = (id) =>{
    return {type:DELETING , id}
};
export const doing = (id) =>{
    return {type:DOING , id}
};
export const editing = (id , newDescription) =>{
    return {type:EDITING , payload:{id,newDescription} }
};
export const filtering = ()=> {
    return{type:FILTERING}
};
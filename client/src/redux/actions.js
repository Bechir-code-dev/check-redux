import { ADDING } from "./actionTypes";

export const adding = (newTask)=> {
    return { type: ADDING, newTask}
}
import React from "react";

const Task = ({id , description , isDone}) =>{
    return(
        <>
        <h2>{description}</h2>
        <button>Delete</button>
        <button>Edit</button>
        <button>Done</button>
        </>
    )
}

export default Task;
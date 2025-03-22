import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { filtering } from "../redux/actions";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch=useDispatch()
const filteringTasks =()=> {
dispatch(filtering())
}

  return (
    <>
      {tasks.map((Element) => (
        <Task {...Element} />
      ))}
          <button onClick={filteringTasks}>filter</button>

    </>
  );
};

export default ListTask;

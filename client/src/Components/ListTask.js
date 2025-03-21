import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <>
      {tasks.map((Element) => (
        <Task {...Element} />
      ))}
    </>
  );
};

export default ListTask;

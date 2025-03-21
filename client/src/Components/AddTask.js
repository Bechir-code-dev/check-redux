import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adding } from "../redux/actions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const addingtask = () => {
    const newTask = {
      id: Math.random(50),
      description: description,
      isDone: false,
    };
    dispatch(adding(newTask));
  };

  return (
    <>
      <input
        type="text"
        placeholder="type your task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addingtask}>Add</button>
    </>
  );
};

export default AddTask;

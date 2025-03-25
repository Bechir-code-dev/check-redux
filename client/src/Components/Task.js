import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleting, doing, editing } from "../redux/actions";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');




const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [newDescription, setNewDescription]=useState(description)

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
// deleting
  const deletingtask = () => {
    dispatch(deleting(id));
  };
  //doing function
  const doingtask = () => {
    dispatch(doing(id));
  };
  // we move to return
  const editTask=(e)=> {
    e.preventDefault();
    dispatch(editing(id, newDescription))
    closeModal();
    }
  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
       
       
        <form>
          <input type="text" placeholder='vgjdch' value={newDescription} onChange={(e)=> setNewDescription(e.target.value)}/>
          <button onClick={editTask}>save</button>
          <button onClick={closeModal}>cancel</button>
         
        </form>
      </Modal>

      {isDone ? (
        <h1 className="fait">{description}</h1>
      ) : (
        <h1>{description}</h1>
      )}
      <button onClick={deletingtask}>Delete</button>
      <button onClick={openModal}>Edit</button>
      <button onClick={doingtask}>Done</button>
    </>
  );
};

export default Task;

import React from "react";
import { FiArrowRightCircle, FiXCircle } from "react-icons/fi";
import { Form, Input, EditButtons } from "./style";
import useInputState from "../../hooks/useInputState";

function TodoEditForm({ id, task, updateTodo, toggleIsEditing }) {
  const [editedTask, updateTask, resetTask] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editedTask.length && updateTodo(id, editedTask);
    resetTask();
    toggleIsEditing();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetTask();
    toggleIsEditing();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={editedTask}
        onChange={updateTask}
        onKeyDown={(e) => e.key === "Escape" && handleCancel(e)}
        autoFocus
      />
      <EditButtons>
        <FiArrowRightCircle onClick={handleSubmit} />
        <FiXCircle onClick={handleCancel} />
      </EditButtons>
    </Form>
  );
}

export default TodoEditForm;

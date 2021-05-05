import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Form, Input, AddTaskButton } from "./style";
import useInputState from "../../hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, update, reset] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value.length && addTodo(value);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={update}
        placeholder="Add new task"
        aria-label="new task"
      />
      <AddTaskButton aria-label="add task">
        <FiPlusCircle />
      </AddTaskButton>
    </Form>
  );
}

export default TodoForm;

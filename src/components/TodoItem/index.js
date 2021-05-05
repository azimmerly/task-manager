import React from "react";
import { FiCircle, FiCheckCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import TodoEditForm from "../TodoEditForm";
import {
  ListItem,
  TaskContainer,
  TaskText,
  Checkbox,
  TaskButtons,
} from "./style";
import useToggleState from "../../hooks/useToggleState";

function TodoItem({ id, task, completed, removeTodo, toggleTodo, updateTodo }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <TodoEditForm
          id={id}
          task={task}
          updateTodo={updateTodo}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <TaskContainer completed={completed}>
            <Checkbox onClick={() => toggleTodo(id)}>
              {completed ? <FiCheckCircle /> : <FiCircle />}
            </Checkbox>
            <TaskText onClick={() => toggleTodo(id)}>{task}</TaskText>
          </TaskContainer>
          <TaskButtons>
            <FiEdit onClick={toggleIsEditing} />
            <FiTrash2 onClick={() => removeTodo(id)} />
          </TaskButtons>
        </>
      )}
    </ListItem>
  );
}

export default TodoItem;

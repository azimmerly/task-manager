import React from "react";
import TodoItem from "../TodoItem";
import GetStarted from "../GetStarted";
import { List } from "./style";

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  if (todos.length)
    return (
      <List>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        ))}
      </List>
    );
  return <GetStarted />;
}

export default TodoList;

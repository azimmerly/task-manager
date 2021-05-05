import React from "react";
import { CountSection, CountText } from "./style";

function TodoCount({ todos }) {
  const completedCount = todos.filter((todo) => todo.completed === true).length;
  const todoCount = todos.length - completedCount;

  return (
    <CountSection>
      <CountText>
        You've completed <span>{completedCount}</span> tasks
      </CountText>
      <CountText>
        You have <span>{todoCount}</span> tasks to do
      </CountText>
    </CountSection>
  );
}

export default TodoCount;

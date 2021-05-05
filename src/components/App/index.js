import React from "react";
import { v4 as uuid } from "uuid";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import TodoCount from "../TodoCount";
import { Container, Content, Header, Title, Subtitle } from "./style";
import useLocalStorageState from "../../hooks/useLocalStorageState";

function App() {
  const initialTodos = [
    { id: uuid(), task: "Walk the dog", completed: true },
    { id: uuid(), task: "Respond to emails", completed: false },
    { id: uuid(), task: "Buy more coffee", completed: false },
  ];
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>Taskly</Title>
          <Subtitle>Task management made simple</Subtitle>
        </Header>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
        <TodoCount todos={todos} />
      </Content>
    </Container>
  );
}

export default App;

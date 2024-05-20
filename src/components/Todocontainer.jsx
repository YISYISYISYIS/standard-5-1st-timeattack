import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todocontainer = () => {
  const defaultTodos = [
    {
      id: 1,
      title: "리액트 공부!",
      content: "리액트 공부를 합시다!",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부!222",
      content: "리액트 공부를 합시다!222",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(defaultTodos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const DoneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoList setTodos={setTodos} title="Working" todos={workingTodos} />
      <TodoList setTodos={setTodos} title="Done" todos={DoneTodos} />
    </div>
  );
};

export default Todocontainer;

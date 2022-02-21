import React from "react";

import SingleTodo from "./SingleTodo";

import { Todo } from "../models/todo";

import "../styles/styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  const renderTodos = () =>
    todos.map((todo) => <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />);

  return <div className="todos">{renderTodos()}</div>;
};

export default TodoList;

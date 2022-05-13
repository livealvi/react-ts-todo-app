import React from "react";
import "./style.css";
import { ITodo } from "../model";

interface Porps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<Porps> = ({ todos, setTodos }: Porps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
};

export default TodoList;

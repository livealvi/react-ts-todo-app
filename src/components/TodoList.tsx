import React from "react";
import "./style.css";
import { ITodo } from "../model";
import SingleTodo from "./SingleTodo";

interface Porps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<Porps> = ({ todos, setTodos }: Porps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

import Todo from "../Todo";
import { useState, useEffect } from "react";
import "./style.css";

const TodoList = ({ todos: todoProps, updateStatus, editTodo, deleteTodo }) => {
  const [todos, setTodos] = useState(todoProps);
  const [displayTodos, setDisplayTodos] = useState("all");

  const handleSelect = (option) => {
    switch (option) {
      case "all":
        setTodos(todoProps);
        setDisplayTodos("all");
        break;
      case "active":
        setTodos(todoProps.filter((todo) => todo.isCompleted === false));
        setDisplayTodos("active");
        break;
      case "completed":
        setTodos(todoProps.filter((todo) => todo.isCompleted === true));
        setDisplayTodos("completed");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleSelect(displayTodos);
  }, [todoProps]);

  return (
    <div className="todo-list">
      <select onChange={(event) => handleSelect(event.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateStatus={updateStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

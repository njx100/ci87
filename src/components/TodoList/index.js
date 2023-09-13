import Todo from "../Todo";
import { useState } from "react";
import "./style.css";

const TodoList = ({ todos: todoProps, updateStatus, editTodo }) => {
  const [todos, setTodos] = useState(todoProps);

  const handleSelect = (option) => {
    switch (option) {
      case "all":
        setTodos(todoProps);
        break;
      case "active":
        setTodos(todoProps.filter((todo) => todo.isCompleted === false));
        break;
      case "completed":
        setTodos(todoProps.filter((todo) => todo.isCompleted === true));
        break;

      default:
        break;
    }
  };

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
        />
      ))}
    </div>
  );
};

export default TodoList;

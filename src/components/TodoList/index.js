import Todo from "../Todo";
import { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const TodoList = ({ todos: todoProps, updateStatus, editTodo, deleteTodo }) => {
  const [todos, setTodos] = useState(todoProps);
  const [displayTodos, setDisplayTodos] = useState("all");
  const theme = useContext(ThemeContext);

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

  const radioBtnClassName = `${
    theme === "dark" ? "radio--btn--dark" : "radio--btn"
  }`;

  useEffect(() => {
    handleSelect(displayTodos);
  }, [todoProps]);

  return (
    <div className="todo-list">
      <fieldset className="display-box">
        <div>
          <input
            className={radioBtnClassName}
            type="radio"
            id="all"
            name="display"
            value="all"
            onClick={() => handleSelect("all")}
            checked={displayTodos === "all" ? true : false}
          />
          <label for="all">All</label>
        </div>
        <div>
          <input
            className={radioBtnClassName}
            type="radio"
            id="active"
            name="display"
            value="active"
            onClick={() => handleSelect("active")}
            checked={displayTodos === "active" ? true : false}
          />
          <label for="active">Active</label>
        </div>
        <div>
          <input
            className={radioBtnClassName}
            type="radio"
            id="completed"
            name="display"
            value="completed"
            onClick={() => handleSelect("completed")}
            checked={displayTodos === "completed" ? true : false}
          />
          <label for="completed">Completed</label>
        </div>
      </fieldset>

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

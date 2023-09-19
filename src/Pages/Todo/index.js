import AddTask from "./AddTask";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
import { TODOS } from "../../Data/Todos";
import { useState, useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import "./style.css";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);
  const themeCtx = useContext(ThemeContext);

  const todoLeft = () => {
    let todoCounter = 0;
    todos.forEach((todo) => {
      todo.isCompleted ? (todoCounter += 0) : todoCounter++;
    });
    return todoCounter;
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateStatus = (key) => {
    const newStatus = todos.map((todo) => {
      if (todo.id === key) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newStatus);
  };

  const editTodo = (id, text) => {
    const updatedTodoList = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = text;
      }
      return todo;
    });
    setTodos(updatedTodoList);
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    setTodos(newTodoList);
  };

  const todoPageClassName = `${
    themeCtx.theme === "dark" ? "todo__page--dark" : "todo__page"
  }`;

  return (
    <div className={todoPageClassName}>
      <div className="todo__page--container">
        <TodoList
          todos={todos}
          updateStatus={updateStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        <AddTask addTodo={addTodo} />
        <TodoFooter todoLeft={todoLeft()} />
      </div>
    </div>
  );
};

export default TodoPage;

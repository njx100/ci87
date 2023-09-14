import TodoHeader from "../../components/Header";
import TodoFooter from "../../components/TodoFooter";
import TodoList from "../../components/TodoList";
import { TODOS } from "../../Data/Todos";
import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);
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

  return (
    <div className="todo-page">
      <TodoHeader addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateStatus={updateStatus}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFooter todoLeft={todoLeft()} />
    </div>
  );
};

export default TodoPage;

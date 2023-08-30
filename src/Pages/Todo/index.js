import TodoHeader from "../../components/Header";
import TodoFooter from "../../components/TodoFooter";
import TodoList from "../../components/TodoList";
import { TODOS } from "../../Data/Todos";
import "./style.css";

const TodoPage = () => {
  const todos = TODOS;
  const todoLeft = () => {
    let todoCounter = 0;
    todos.forEach((todo) => {
      todo.isCompleted ? (todoCounter += 0) : todoCounter++;
    });
    return todoCounter;
  };

  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList todos={todos} />
      <TodoFooter todoLeft={todoLeft()} />
    </div>
  );
};

export default TodoPage;

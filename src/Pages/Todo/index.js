import { useState } from "react";

import TodoHeader from "../../components/Header";
import TodoFooter from "../../components/TodoFooter";
import TodoList from "../../components/TodoList";
import { TODOS } from "../../Data/Todos";

const TodoPage = () => {
  const [todos, setTodos] = useState(TODOS);
  // Tao function handle handeCompleteTodo(id) -> handle isCompleted cua todo dua tren id
  // countCompletedTodo dem so todo chua hoan thanh -> truyen vao footer
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList todos={todos} />
      <TodoFooter />
    </div>
  );
};

export default TodoPage;

import TodoHeader from "../../components/Header";
import TodoFooter from "../../components/TodoFooter";
import TodoList from "../../components/TodoList";
import { TODOS } from "../../Data/Todos";

const TodoPage = () => {
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList todos={TODOS} />
      <TodoFooter />
    </div>
  );
};

export default TodoPage;

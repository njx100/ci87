import TodoHeader from "../../components/Header";
import TodoFooter from "../../components/TodoFooter";
import TodoList from "../../components/TodoList";

const TodoPage = () => {
  return (
    <div className="todo-page">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default TodoPage;

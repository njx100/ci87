import { TODOS } from "../../Data/Todos";
import Todo from "../Todo";

const TodoList = () => {
  return (
    <div className="todo-list">
      {TODOS.map(({ id, task }) => (
        <Todo key={id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;

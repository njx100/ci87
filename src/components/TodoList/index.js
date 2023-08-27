import TodoListData from "../../Data/TodoListData";
import Todo from "../Todo";

const TodoList = () => {
  return (
    <div className="todo-list">
      {TodoListData.map(({ id, task }) => (
        <Todo id={id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;

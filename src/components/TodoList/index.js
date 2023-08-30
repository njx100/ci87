import Todo from "../Todo";

import "./style.css";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map(({ todo, isCompleted }) => (
        <Todo todo={todo} isCompleted={isCompleted} />
      ))}
    </div>
  );
};

export default TodoList;

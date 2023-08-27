import TodoCounter from "../TodoCounter";

const TodoFooter = () => {
  return (
    <div className="todo-footer">
      <TodoCounter tasks="5" className="task-counter" />
      <p className="footer-text">MindX todolist</p>
    </div>
  );
};

export default TodoFooter;

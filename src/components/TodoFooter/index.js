import TodoCounter from "../TodoCounter";

const TodoFooter = ({ todoLeft }) => {
  return (
    <div className="todo-footer">
      <p>{`${todoLeft} ${todoLeft > 1 ? "tasks" : "task"} left!`}</p>
      <p className="footer-text">MindX todolist</p>
    </div>
  );
};

export default TodoFooter;

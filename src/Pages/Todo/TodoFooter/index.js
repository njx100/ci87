import "./style.css";

const TodoFooter = ({ todoLeft }) => {
  return (
    <div className="todo-footer">
      <p>{`${todoLeft} ${todoLeft > 1 ? "tasks" : "task"} left!`}</p>
    </div>
  );
};

export default TodoFooter;

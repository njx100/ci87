import { useState } from "react";
import "./style.css";

const Todo = ({ todo, isCompleted }) => {
  const [isDone, setIsDone] = useState(isCompleted);
  const handleCheckbox = () => {
    isDone ? setIsDone(false) : setIsDone(true);
  };

  return (
    <div className="todo-container">
      <input type="checkbox" onChange={handleCheckbox} checked={isDone} />
      <label
        style={{
          textDecorationLine: isDone ? "line-through" : "none",
          opacity: isDone ? ".6" : "1",
        }}
      >
        {todo}
      </label>
    </div>
  );
};

export default Todo;

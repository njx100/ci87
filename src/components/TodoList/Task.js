import { useState } from "react";

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        onChange={() => {
          !isChecked ? setIsChecked(true) : setIsChecked(false);
        }}
      />
      <label
        htmlFor={props.id}
        style={{
          textDecorationLine: isChecked ? "line-through" : "none",
        }}
      >
        {props.task}
      </label>
    </div>
  );
};

export default Task;

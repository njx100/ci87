import { useState } from "react";

const Todo = ({ todo, handeCompleteTodo }) => {
  const { id, task, isCompleted } = todo;

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isCompleted}
        onClick={handeCompleteTodo}
      />
      <label
        htmlFor={id}
        style={{
          textDecorationLine: isCompleted ? "line-through" : "none",
        }}
      >
        {task}
      </label>
    </div>
  );
};

export default Todo;

import "./style.css";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Todo = ({ todo, updateStatus, editTodo, deleteTodo }) => {
  const { id, task, isCompleted } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);

  const handleEnter = (e) => {
    if (e.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        onChange={() => updateStatus(id)}
        checked={isCompleted}
      />
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleEnter}
        ></input>
      ) : (
        <div className="text-container">
          <label
            className={isCompleted ? "task-completed" : null}
            onDoubleClick={() => setIsEditing(true)}
          >
            {text}
          </label>
          <DeleteOutlined
            className="delete-btn"
            onClick={() => deleteTodo(id)}
          />
        </div>
      )}
    </div>
  );
};

export default Todo;

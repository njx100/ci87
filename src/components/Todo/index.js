import "./style.css";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { AiFillCheckSquare } from "react-icons/ai";

const Todo = ({ todo, updateStatus, editTodo, deleteTodo }) => {
  const { id, task, isCompleted, estPomodoros } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);
  const [displayDelete, setDisplayDelete] = useState(false);

  const handleEnter = (e) => {
    if (e.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className="todo-container"
      onMouseOver={() => setDisplayDelete(true)}
      onMouseOut={() => setDisplayDelete(false)}
    >
      <button onClick={() => updateStatus(id)}>
        <AiFillCheckSquare
          className={`checkbox ${!isCompleted && "checkbox-unchecked"}`}
        />
      </button>

      {isEditing ? (
        <input
          className="edit-task"
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
        </div>
      )}

      <p className="est-pomodoros">{estPomodoros}</p>
      <DeleteOutlined
        className={`delete-btn ${displayDelete ? "delete-btn-active" : null}`}
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default Todo;

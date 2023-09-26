import "./style.css";
import { useState, useContext } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { AiFillCheckSquare } from "react-icons/ai";
import { ThemeContext } from "../../../components/ThemeContext";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Todo = ({ todo, updateStatus, editTodo, deleteTodo }) => {
  const { id, task, isCompleted, estPomodoros } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const themeCtx = useContext(ThemeContext);

  const handleEnter = (e) => {
    if (e.key === "Enter" && text) {
      editTodo(id, text);
      setIsEditing(false);
    }
  };

  const btnClassName = `${
    themeCtx.theme === "dark"
      ? `checkbox-dark ${!isCompleted && "checkbox-unchecked"}`
      : `checkbox ${!isCompleted && "checkbox-unchecked"}`
  }`;

  return (
    <div
      className="todo-container"
      onMouseOver={() => setDisplayDelete(true)}
      onMouseOut={() => setDisplayDelete(false)}
    >
      <button onClick={() => updateStatus(id, isCompleted)}>
        <AiFillCheckSquare className={btnClassName} />
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
      {isDeleting ? (
        <LoadingOutlined className="loading-spin" spin />
      ) : (
        <DeleteOutlined
          className={`delete-btn ${displayDelete ? "delete-btn-active" : null}`}
          onClick={() => {
            setIsDeleting(true);
            deleteTodo(id);
          }}
        />
      )}
    </div>
  );
};

export default Todo;

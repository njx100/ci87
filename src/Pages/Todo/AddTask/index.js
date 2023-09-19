import { AiFillPlusCircle } from "react-icons/ai";

import AddTaskWindow from "../AddTaskWindow";
import "./style.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../components/ThemeContext";

const AddTask = ({ addTodo }) => {
  const themeCtx = useContext(ThemeContext);
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleDisplayAddTask = (addingStatus) => {
    setIsAddingTask(addingStatus);
  };

  const addTaskClassName = `${
    themeCtx.theme === "dark" ? "add-icon-dark" : "add-icon"
  }`;

  return (
    <div className="todo-header">
      {isAddingTask ? (
        <AddTaskWindow
          handleDisplayAddTask={handleDisplayAddTask}
          addTodo={addTodo}
        />
      ) : (
        <button className="add-btn" onClick={() => handleDisplayAddTask(true)}>
          <AiFillPlusCircle className={addTaskClassName} />
        </button>
      )}
    </div>
  );
};

export default AddTask;

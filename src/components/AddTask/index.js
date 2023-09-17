import { AiFillPlusCircle } from "react-icons/ai";

import AddTaskWindow from "../AddTaskWindow";
import "./style.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const AddTask = ({ addTodo }) => {
  const theme = useContext(ThemeContext);
  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleDisplayAddTask = (addingStatus) => {
    setIsAddingTask(addingStatus);
  };

  return (
    <div className="todo-header">
      {isAddingTask ? (
        <AddTaskWindow
          handleDisplayAddTask={handleDisplayAddTask}
          addTodo={addTodo}
        />
      ) : (
        <button className="add-btn" onClick={() => handleDisplayAddTask(true)}>
          <AiFillPlusCircle
            className={theme === "dark" ? "add-icon-dark" : "add-icon"}
          />
        </button>
      )}
    </div>
  );
};

export default AddTask;

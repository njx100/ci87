import { AiFillPlusCircle } from "react-icons/ai";

import AddTaskWindow from "../AddTaskWindow";
import "./style.css";
import { useState } from "react";

const TodoHeader = ({ addTodo }) => {
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
          <AiFillPlusCircle className="add-icon" />
        </button>
      )}
    </div>
  );
};

export default TodoHeader;

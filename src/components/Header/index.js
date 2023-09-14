import { Button } from "antd";
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
      {/* <input
        type="text"
        placeholder="Enter task here ..."
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.target.value !== false) {
            addTodo(event.target.value);
            event.target.value = "";
          }
        }}
      /> */}
      {isAddingTask ? (
        <AddTaskWindow
          handleDisplayAddTask={handleDisplayAddTask}
          addTodo={addTodo}
        />
      ) : (
        <Button onClick={() => handleDisplayAddTask(true)}>Add task</Button>
      )}
    </div>
  );
};

export default TodoHeader;

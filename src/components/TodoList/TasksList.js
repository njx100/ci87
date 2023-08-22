import Task from "./Task";
import TasksListData from "./TaskListData";

const TasksList = () => {
  return (
    <div className="task-list">
      {TasksListData.map(({ id, task }) => (
        <Task id={id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;

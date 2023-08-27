const TodoCounter = ({ tasks = 0 }) => {
  return (
    <div>
      <p>{`${tasks} ${tasks > 1 ? "tasks" : "task"} left!`}</p>
    </div>
  );
};

export default TodoCounter;

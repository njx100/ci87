const Todo = ({ todo }) => {
  const { id, task, isCompleted } = todo;

  return (
    <div className="todo-container">
      <input type="checkbox" name={id} id={id} checked={isCompleted} />
      <label
        htmlFor={id}
        style={{
          textDecorationLine: isCompleted ? "line-through" : "none",
          opacity: isCompleted ? ".6" : "1",
        }}
      >
        {task}
      </label>
    </div>
  );
};

export default Todo;

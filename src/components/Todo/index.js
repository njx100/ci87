const Todo = ({ todo, isCompleted }) => {
  return (
    <div className="todo-container">
      <input type="checkbox" checked={isCompleted} />
      <label
        style={{
          textDecorationLine: isCompleted ? "line-through" : "none",
          opacity: isCompleted ? ".6" : "1",
        }}
      >
        {todo}
      </label>
    </div>
  );
};

export default Todo;

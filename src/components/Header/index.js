import "./style.css";

const TodoHeader = ({ addTodo }) => {
  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter task here ..."
        onKeyDown={(event) => {
          if (event.key === "Enter" && event.target.value !== false) {
            addTodo(event.target.value);
            event.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default TodoHeader;

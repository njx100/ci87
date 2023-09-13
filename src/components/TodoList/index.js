import Todo from "../Todo";

import "./style.css";

const TodoList = ({ todos, updateStatus, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateStatus={updateStatus}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

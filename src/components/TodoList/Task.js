const Task = (props) => {
  return (
    <div className="todo-container">
      <input type="checkbox" name={props.id} id={props.id} />
      <label htmlFor={props.id}>{props.task}</label>
    </div>
  );
};

export default Task;

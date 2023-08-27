const TodoCounter = ({ tasks = 0 }) => {
  return (
    <div>
      {parseInt(tasks) > 1 ? (
        <p>{tasks} tasks left!</p>
      ) : (
        <p>{tasks} task left!</p>
      )}
    </div>
  );
};

export default TodoCounter;

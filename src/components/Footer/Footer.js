import TaskCounter from "./TaskCounter";

const Footer = () => {
  return (
    <div className="footer">
      <TaskCounter tasks="5" className="task-counter" />
      <p className="footer-text">MindX todolist</p>
    </div>
  );
};

export default Footer;

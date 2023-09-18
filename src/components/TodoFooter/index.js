import { Switch } from "antd";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./style.css";

const TodoFooter = ({ todoLeft, setTheme }) => {
  return (
    <div className="todo-footer">
      <p>{`${todoLeft} ${todoLeft > 1 ? "tasks" : "task"} left!`}</p>
      <Switch
        onChange={() =>
          setTheme((prevTheme) =>
            prevTheme === "default" ? "dark" : "default"
          )
        }
        checkedChildren={<BsFillSunFill />}
        unCheckedChildren={<BsFillMoonFill />}
      />
    </div>
  );
};

export default TodoFooter;

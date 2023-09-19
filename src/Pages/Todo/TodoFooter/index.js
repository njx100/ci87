import { Switch } from "antd";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../../components/ThemeContext";
import { useContext, useState } from "react";
import "./style.css";

const TodoFooter = ({ todoLeft }) => {
  const themeCtx = useContext(ThemeContext);
  const onChangeTheme = () => {
    themeCtx.setTheme((prevTheme) =>
      prevTheme === "default" ? "dark" : "default"
    );
  };

  return (
    <div className="todo-footer">
      <p>{`${todoLeft} ${todoLeft > 1 ? "tasks" : "task"} left!`}</p>
      <Switch
        onChange={() => onChangeTheme()}
        checkedChildren={<BsFillSunFill />}
        unCheckedChildren={<BsFillMoonFill />}
      />
    </div>
  );
};

export default TodoFooter;

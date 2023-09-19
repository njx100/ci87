import { NavLink, Link } from "react-router-dom";
import { Switch } from "antd";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext";
import { useContext, useState } from "react";
import "./style.css";
import logo from "./logo-white.png";

const Header = () => {
  const themeCtx = useContext(ThemeContext);
  const onChangeTheme = () => {
    themeCtx.setTheme((prevTheme) =>
      prevTheme === "default" ? "dark" : "default"
    );
  };

  return (
    <header className="header">
      <nav className="navbar-wrapper">
        <div className="navbar-container">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="navbar">
            <li>
              <Switch
                onChange={() => onChangeTheme()}
                checkedChildren={<BsFillSunFill />}
                unCheckedChildren={<BsFillMoonFill />}
              />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos App</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

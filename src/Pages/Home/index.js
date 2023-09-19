import Header from "../../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import "./style.css";

const Home = () => {
  const themeCtx = useContext(ThemeContext);

  const homePageClassName = `home__page ${
    themeCtx.theme === "dark" ? "home__page--dark" : "home__page--light"
  }`;

  return (
    <div>
      <Header />
      <div className={homePageClassName}>
        <div>
          <h2>Stay organized and productive with our powerful todo app</h2>
          <h3>Features</h3>
          <ul>
            <li>Add, edit, and delete tasks with ease</li>
            <li> Set due dates and priorities</li>
            <li> Create different lists to organize your tasks</li>
            <li> Receive reminders</li>
            <li> Collaborate with others (coming soon)</li>
          </ul>
          <h3>Benefits</h3>
          <ul>
            <li>Stay organized and productive</li>
            <li>Reduce stress and anxiety</li>
            <li>Achieve your goals faster</li>
            <li>Improve your time management skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

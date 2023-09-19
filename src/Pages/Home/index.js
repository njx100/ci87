import Header from "../../components/Header";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home__page">
        <div>
          <h2>Stay organized and productive with our powerful todo app.</h2>
          <p>
            Our todo app is the perfect way to keep track of your tasks and
            deadlines. With its simple and intuitive interface, you can easily
            add, edit, and delete tasks, as well as set due dates and
            priorities. You can also create different lists to organize your
            tasks by project, category, or anything else you need.
          </p>

          <h3>Features:</h3>
          <ul>
            <li>Add, edit, and delete tasks with ease</li>
            <li> Set due dates and priorities</li>
            <li> Create different lists to organize your tasks</li>
            <li> Receive reminders</li>
            <li> Collaborate with others (coming soon)</li>
          </ul>
          <h3>Benefits:</h3>
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

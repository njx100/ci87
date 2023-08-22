import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Footer from "./components/Footer/Footer";
import TasksList from "./components/TodoList/TasksList";

const App = () => {
  return (
    <div className="App">
      <NewTask />

      <TasksList />
      <Footer />
    </div>
  );
};

export default App;

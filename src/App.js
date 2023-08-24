import "./App.css";

import Footer from "./components/Footer/Footer";
import TasksList from "./components/TodoList/TasksList";
import TodoHeader from "./components/Header/TodoHeader";

const App = () => {
  return (
    <div className="App">
      <TodoHeader />

      <TasksList />
      <Footer />
    </div>
  );
};

export default App;

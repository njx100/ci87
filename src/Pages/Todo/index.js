import AddTask from "./AddTask";
import TodoFooter from "./TodoFooter";
import TodoList from "./TodoList";
// import { useFetchTodos } from "../../components/useFetchTodos";
// import { TODOS } from "../../Data/Todos";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import axios from "axios";
import "./style.css";
import Header from "../../components/Header";
import { Button } from "antd";

const TodoPage = () => {
  const urlToFetch = "https://650c557c47af3fd22f677e50.mockapi.io/";
  const todosEndPoint = "todos/";
  const [todos, setTodos] = useState([]);
  const themeCtx = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);

  const todoLeft = () => {
    let todoCounter = 0;
    todos.forEach((todo) => {
      todo.isCompleted ? (todoCounter += 0) : todoCounter++;
    });
    return todoCounter;
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]); // render new todo before post api to increase user experience
    axios.post(urlToFetch + todosEndPoint, newTodo).catch((error) => {
      console.log(error);
    });
  };

  const updateStatus = (id, isCompleted) => {
    const newStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newStatus);
    axios.put(urlToFetch + todosEndPoint + id, {
      isCompleted: !isCompleted,
    });
  };

  const editTodo = (id, text) => {
    axios.put(urlToFetch + todosEndPoint + id, { task: text });
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      if (todo.id !== id) return todo;
      return false;
    });
    setTodos(newTodoList);
    axios.delete(urlToFetch + todosEndPoint + id).catch((error) => {
      console.log(error);
    });
  };

  const todoPageClassName = `${
    themeCtx.theme === "dark" ? "todo__page--dark" : "todo__page"
  }`;

  const fetchTodos = async () => {
    setIsLoading(true);
    const response = await axios.get(urlToFetch + todosEndPoint);
    setTodos(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <div className={todoPageClassName}>
        <div className="todo__page--container">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TodoList
              todos={todos}
              updateStatus={updateStatus}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          )}
          <AddTask addTodo={addTodo} />
          {/* <Button className="fetch-btn" onClick={fetchTodos}>
            Fetch todos
          </Button> */}
          <TodoFooter todoLeft={todoLeft()} />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

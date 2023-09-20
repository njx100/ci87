import "./App.css";
import Todo from "./Pages/Todo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <BrowserRouter className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;

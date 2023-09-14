import "./style.css";
import { Col, Row, Button } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const AddTaskWindow = ({ handleDisplayAddTask, addTodo }) => {
  const [text, setText] = useState("");
  const [estPomodoros, setEstPomodoros] = useState(1);

  const handleSaveTodo = () => {
    const newTodo = {
      id: uuidv4(),
      task: text,
      isCompleted: false,
      estPomodoros: estPomodoros,
    };
    addTodo(newTodo);
    handleDisplayAddTask(false);
  };

  return (
    <div className="add-task-window">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          event.key === "Enter" && handleSaveTodo();
        }}
        placeholder="What are you working on?"
      />
      <p>Est Pomodoros</p>
      <Row>
        <Col>
          <input type="text" value={estPomodoros} disabled />
        </Col>
        <Col>
          <Button
            className="increase-pomodoros"
            onClick={() => setEstPomodoros(estPomodoros + 1)}
          >
            <CaretUpOutlined />
          </Button>
        </Col>
        <Col>
          <Button
            className="decrease-pomodoros"
            onClick={() =>
              estPomodoros > 1 && setEstPomodoros(estPomodoros - 1)
            }
          >
            <CaretDownOutlined />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => {
              setText("");
              handleDisplayAddTask(false);
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col>
          <Button onClick={() => handleSaveTodo()}>Save</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddTaskWindow;

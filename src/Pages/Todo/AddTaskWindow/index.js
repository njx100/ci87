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
    setText("");
  };

  return (
    <div className="add-task-window">
      <div className="input-wrapper">
        <input
          className="add-task-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            event.key === "Enter" && text !== "" && handleSaveTodo();
          }}
          placeholder="Add new task..."
          autoFocus
        />
      </div>

      <Row className="est-pomodoros-container">
        <Col>
          <p>Est Pomodoros:</p>
        </Col>
        <Col>
          <input
            className="pomodoros-input"
            type="text"
            value={estPomodoros}
            size="2"
          />
        </Col>
        <Col>
          <button
            className="increase-pomodoros"
            onClick={() => setEstPomodoros(estPomodoros + 1)}
          >
            <CaretUpOutlined />
          </button>
        </Col>
        <Col>
          <button
            className="decrease-pomodoros"
            onClick={() =>
              estPomodoros > 1 && setEstPomodoros(estPomodoros - 1)
            }
          >
            <CaretDownOutlined />
          </button>
        </Col>
      </Row>
      <Row className="save-and-cancel-btn">
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
          <Button
            onClick={() => handleSaveTodo()}
            disabled={text === "" ? true : false}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddTaskWindow;

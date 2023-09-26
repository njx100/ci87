import { Alert, Space, Spin } from "antd";
import "./style.css";

const LoadingTodos = () => {
  return (
    <>
      <Space className="loading-banner" direction="vertical">
        <Spin className="spinner" tip="Loading...">
          <Alert
            className="alert-text"
            message="Please wait while we are retrieving your todos"
            type="info"
          />
        </Spin>
      </Space>
    </>
  );
};

export default LoadingTodos;

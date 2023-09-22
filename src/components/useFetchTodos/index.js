import axios from "axios";

export const useFetchTodos = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

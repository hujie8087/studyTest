import axios from "axios";

export const registerRequest = (userData) => {
  return (dispatch) => {
    return axios.post("/api/users", userData);
  };
};

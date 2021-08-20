import axios from "axios";

export const registerRequest = (userData) => {
  console.log(userData);
  return (dispatch) => {
    return axios.post("/api/users", userData);
  };
};

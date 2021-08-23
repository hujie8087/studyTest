import axios from "axios";

export const registerRequest = (userData) => {
  return (dispatch) => {
    return axios.post("/api/users", userData);
  };
};

export const isUserExists = (username) => {
  return (dispatch) => {
    return axios.get(`/api/users/${username}`);
  };
};

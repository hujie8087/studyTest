import axios from "axios";

export const login = (value) => {
  return (dispatch) => {
    return axios.post("/api/auth", value);
  };
};

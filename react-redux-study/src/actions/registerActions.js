import ajax from "../common/ajax";

export const registerRequest = (userData) => {
  return (dispatch) => {
    return ajax.post("/api/users", userData);
  };
};

export const isUserExists = (username) => {
  return (dispatch) => {
    return ajax.get(`/api/users/${username}`);
  };
};

import ajax from "../common/ajax";
import { message } from "antd";
import { SET_USER_LOGIN } from "../reducers/actionTypes";
import jwtDecode from "jwt-decode";

export const setCurrentUser = (user) => {
  return {
    type: SET_USER_LOGIN,
    user,
  };
};

export const login = (value) => {
  return (dispatch) => {
    return ajax.post("/api/auth", value).then((res) => {
      const token = res.token;
      localStorage.setItem("jwtToken", token);
      dispatch(setCurrentUser(jwtDecode(token)));
      if (res.status === 200) {
        message.success(res.message || "登录成功");
        // history.push("/");
      } else {
        message.error(res.message || "用户名密码错误");
      }
    });
  };
};

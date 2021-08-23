import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../actions/loginActions";
import LoginForm from "./indexForm";
import "./index.less";

function Login(props) {
  return (
    <div className='form-content'>
      <h2 className='text-center'>登录</h2>
      <LoginForm loginActions={props.loginActions} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Login);

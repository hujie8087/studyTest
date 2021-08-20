import React from "react";
import RegisterForm from "./registerForm";
import * as registerActions from "../../actions/registerActions";
import "./index.less";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Register() {
  return (
    <div className='form-content'>
      <h2 className='text-center'>注册</h2>
      <RegisterForm registerActions={registerActions} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerActions: bindActionCreators(registerActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Register);

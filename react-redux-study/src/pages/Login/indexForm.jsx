import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const onFinish = (values) => {
    props.loginActions.login(values);
  };

  return (
    <Form name='login' initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        label=''
        name='username'
        rules={[{ required: true, message: "请输入您的用户名!" }]}
      >
        <Input placeholder='请输入您的用户名' />
      </Form.Item>

      <Form.Item
        label=''
        name='password'
        rules={[{ required: true, message: "请输入您的密码!" }]}
      >
        <Input.Password placeholder='请输入您的密码' />
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>记住我的登陆状态</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: "100%" }}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(LoginForm);

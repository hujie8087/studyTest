import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./index.less";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='form-content'>
      <h2 className='text-center'>登录</h2>
      <Form
        name='login'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
    </div>
  );
}

export default Login;

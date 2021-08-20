import React from "react";
import { Form, Input, Button } from "antd";

function RegisterForm(props) {
  const [form] = Form.useForm(); //实例化表单

  // 提交成功
  const onFinish = (values) => {
    props.registerActions.registerRequest(values);
  };
  // 提交失败npm
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // 验证二次密码
  const checkPsd = (rule, value, callback) => {
    const password = form.getFieldValue("password");
    if (!value || value === password) {
      return callback();
    } else {
      return callback(new Error("输入的两次密码不匹配！"));
    }
  };
  return (
    // validateTrigger 设置验证时机
    <Form
      form={form}
      name='register'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateTrigger='onBlur'
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
        name='email'
        rules={[
          {
            type: "email",
            message: "请输入正确的邮箱!",
          },
          { required: true, message: "请输入您的邮箱!" },
        ]}
      >
        <Input placeholder='请输入您的邮箱' />
      </Form.Item>
      <Form.Item
        label=''
        name='password'
        rules={[
          {
            min: 6,
            message: "请输入至少6位的密码!",
          },
          { required: true, message: "请输入您的密码!" },
        ]}
      >
        <Input.Password placeholder='请输入您的密码' />
      </Form.Item>

      <Form.Item
        label=''
        name='confirm'
        rules={[
          { required: true, message: "请确认您的密码!" },
          {
            validator: (rule, value, callback) => {
              checkPsd(rule, value, callback);
            },
          },
        ]}
      >
        <Input.Password placeholder='请确认您的密码' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: "100%" }}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;

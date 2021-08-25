import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { withRouter } from "react-router-dom";

function RegisterForm(props) {
  const [form] = Form.useForm(); //实例化表单
  const [loading, setLoading] = useState(false);
  // 提交成功
  const onFinish = (values) => {
    setLoading(true);
    props.registerActions.registerRequest(values).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        message.success(res.message);
        props.history.push("/");
      }
    });
  };
  // 提交失败npm
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const isNameExiste = (rule, value, callback) => {
    if (value) {
      props.registerActions.isUserExists(value).then((res) => {
        if (res.status === 200 && res.success) {
          callback();
        } else {
          callback(new Error(res.message));
        }
      });
    }
  };

  return (
    // validateTrigger 设置验证时机
    <Form
      form={form}
      name='register'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateTrigger='onBlur'
    >
      <Form.Item
        label=''
        name='username'
        rules={[
          { required: true, message: "请输入您的用户名!" },
          {
            validator: isNameExiste,
          },
        ]}
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
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("输入的两次密码不匹配!"));
            },
          }),
        ]}
      >
        <Input.Password placeholder='请确认您的密码' />
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          style={{ width: "100%" }}
          loading={loading}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}

export default withRouter(RegisterForm);

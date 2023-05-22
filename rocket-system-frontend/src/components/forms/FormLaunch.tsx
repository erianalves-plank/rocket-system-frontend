import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormLaunch: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input the Launch name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Rocket"
      name="rocket"
      rules={[{ required: true, message: 'Please input the rocket for the launch!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Crew"
      name="crew"
      rules={[{ required: false, message: 'Please input the crew for the launch!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export {
    FormLaunch
};
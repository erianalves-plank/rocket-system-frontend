import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormCrewman: React.FC = () => (
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
      rules={[{ required: true, message: 'Please input the Crewman name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Patent"
      name="patent"
      rules={[{ required: true, message: 'Please input the Crewman patent!' }]}
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
    FormCrewman
};
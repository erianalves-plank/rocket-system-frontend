import React from 'react';
import { Button, Form, Input } from 'antd';
import ItemsSelected from '../ItemsSelect';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormCrew: React.FC = () => (
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
      rules={[{ required: true, message: 'Please input the Crew name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
    label='Crewmen'
    rules={[{ required: true, message: 'Please input the Crew name!' }]}
    >
     <ItemsSelected/>
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export {
    FormCrew
};
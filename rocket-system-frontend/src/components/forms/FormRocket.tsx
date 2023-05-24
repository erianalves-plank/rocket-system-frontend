import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { RocketDTO } from '../../dtos/RocketDTO';

type RocketFormData = {
  rocket?: RocketDTO;
}

const onFinish = (values: Partial<RocketDTO>) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormRocket: React.FC<RocketFormData> = ({ rocket }) => {

  const [form] = Form.useForm();

  useEffect(() => {
    /*     const fieldValues = rocket ? rocket : {};
        console.log('let me ', fieldValues);
        form.setFieldsValue(fieldValues); */

    if (rocket)
      form.setFieldsValue(rocket);
    else
      form.resetFields();


  }, [rocket, form]);
  /* console.log(rocket, ' / ', form.getFieldsValue()); */

  return (
    <Form
      form={form}
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
        rules={[{ required: true, message: 'Please input the rocket name!' }]}
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
};

export {
  FormRocket
};

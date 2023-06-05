import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { RocketDTO } from '../../dtos/RocketDTO';

export type RocketFormData = {
  rocket?: RocketDTO;
  handleOperationRocket: (data: Partial<RocketDTO>) => void;
};

const onFinish = (values: Partial<RocketDTO>) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormRocket: React.FC<RocketFormData> = ({
  rocket,
  handleOperationRocket,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (rocket) form.setFieldsValue(rocket);
    else form.resetFields();
  }, [rocket, form]);

  const dataSubmitted = (values: Partial<RocketDTO>) => {
    handleOperationRocket(values);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={dataSubmitted}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the rocket name!' }]}
      >
        <Input data-cy={`name-field-rocket`}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit" data-cy={`submit-button-rocket`}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { FormRocket };

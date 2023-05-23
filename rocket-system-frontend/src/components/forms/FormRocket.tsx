import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { DataRocket } from '../cardContent/CardContent';

type ModalFormRocket = {
  data: DataRocket;
}

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormRocket: React.FC<ModalFormRocket> = ({ data }) => {
  const [rocket, setRocket] = useState<DataRocket | undefined>(data ?? undefined);
  const [initialValuesForm, setInitialValuesForm] = useState(rocket ?? {});

  useEffect(() => {
    setRocket(data);
    setInitialValuesForm(rocket ?? {});
  }, [data, rocket]);

  console.log('Maybe ', initialValuesForm);
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={initialValuesForm}
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
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { CrewmanDTO } from '../../dtos/CrewmanDTO';

export type CrewmanFormData = {
  crewman?: CrewmanDTO;
  handleOperationCrewman: (data: Partial<CrewmanDTO>) => void;
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormCrewman: React.FC<CrewmanFormData> = ({
  crewman,
  handleOperationCrewman,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (crewman) form.setFieldsValue(crewman);
    else form.resetFields();
  }, [crewman, form]);

  const dataSubmitted = (values: Partial<CrewmanDTO>) => {
    handleOperationCrewman(values);
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
        rules={[{ required: true, message: 'Please input the Crewman name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Patent"
        name="patent"
        rules={[
          { required: true, message: 'Please input the Crewman patent!' },
        ]}
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
export { FormCrewman };

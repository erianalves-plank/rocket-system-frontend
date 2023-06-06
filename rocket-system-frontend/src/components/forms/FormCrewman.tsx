import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { CrewmanDTO } from '../../dtos/CrewmanDTO';
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();
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
        label={t('name')}
        name="name"
        rules={[{ required: true, message: 'Please input the Crewman name!' }]}
      >
        <Input data-cy={`name-field-crewman`}/>
      </Form.Item>
      <Form.Item
        label={t('patent')}
        name="patent"
        rules={[
          { required: true, message: 'Please input the Crewman patent!' },
        ]}
      >
        <Input data-cy={`patent-field-crewman`}/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit" data-cy={`submit-button-crewman`}>
        {t('submit')}
        </Button>
      </Form.Item>
    </Form>
  );
};
export { FormCrewman };

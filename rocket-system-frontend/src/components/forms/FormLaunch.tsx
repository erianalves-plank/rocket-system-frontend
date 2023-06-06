import { Button, Form, Input, Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { LaunchDTO } from '../../dtos/LaunchDTO';
import { useTranslation } from 'react-i18next';

export type LaunchFormData = {
  launch?: LaunchDTO;
  handleOperationLaunch: (
    data: Partial<LaunchDTO>,
    rocketName: string,
    crewName: string
  ) => void;
};

type LaunchFormReturn = {
  name: string;
  launchCode: string;
  date: string;
  success: boolean;
  rocketName: string;
  crewName: string;
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const FormLaunch: React.FC<LaunchFormData> = ({
  launch,
  handleOperationLaunch,
}) => {
  const [t] = useTranslation();
  const [form] = Form.useForm();

  const [checked, setChecked] = useState(false);

  const handleToggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleSetSwitchValue = (value: boolean) => {
    setChecked(value);
  };

  const dataSubmitted = (values: LaunchFormReturn) => {
    values['success'] = checked;
    console.log('values ', values);
    handleOperationLaunch(values, values.rocketName, values.crewName);
  };

  useEffect(() => {
    console.log('>> ', launch);
    if (launch) {
      form.setFieldsValue({
        launchCode: launch.launchCode,
        date: launch.date,
        rocketName: launch.rocket.name,
        crewName: launch.crew.name,
      });
      handleSetSwitchValue(launch.success);
    } else form.resetFields();
  }, [launch, form]);

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={dataSubmitted}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={t('launch code')}
        name="launchCode"
        rules={[{ required: true, message: 'Please input the Launch Code!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('date')}
        name="date"
        rules={[{ required: true, message: 'Please input the Launch date!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('rocket')}
        name="rocketName"
        rules={[
          {
            required: true,
            message: 'Please input the rocket for the launch!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('success')}
        rules={[
          {
            required: true,
            message: 'Please check the success launch status!',
          },
        ]}
      >
        <Switch
          checkedChildren="True"
          unCheckedChildren="False"
          checked={checked}
          onChange={handleToggleSwitch}
        />
      </Form.Item>

      <Form.Item
        label={t('crew')}
        name="crewName"
        rules={[
          { required: false, message: 'Please input the crew for the launch!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
        {t('submit')}
        </Button>
      </Form.Item>
    </Form>
  );
};
export { FormLaunch };

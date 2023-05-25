import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { CrewDTO } from '../../dtos/CrewDTO'
import ItemsSelected from '../ItemsSelect'

type CrewFormData = {
  crew?: CrewDTO
  crewmenDB: string[]
}

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const FormCrew: React.FC<CrewFormData> = ({ crew, crewmenDB }) => {
  const [crewmenList, setCrewmenList] = useState<string[]>([])
  const [form] = Form.useForm()

  useEffect(() => {
/*     console.log('Crew:', crew);
    console.log('CrewmenDB:', crewmenDB); */

    if (crew) {
      setCrewmenList(crew.crewmen.map(obj => obj.name))
      form.setFieldsValue(crew)
    } else {
      form.resetFields()
      setCrewmenList([]);
    }
  }, [crew, form])
/*   console.log('CrewmenList:', crewmenList); */
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
        rules={[{ required: true, message: 'Please input the Crew name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Crewmen"
        rules={[{ required: true, message: 'Please input the Crew name!' }]}
      >
        <ItemsSelected options={crewmenDB} itemsAlreadySelected={crewmenList} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export { FormCrew }

import { Button, Form, FormInstance, Input } from "antd"
import { CompanyType } from "../companyList/models"
import { useRef } from "react"

export type CompanyFormType = {
  companyInfo: CompanyType
  isLoading: boolean
  onSubmit: () => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CompanyForm = ({ companyInfo, isLoading, onInputChange, onSubmit }: CompanyFormType) => {
  const formRef = useRef<FormInstance>(null);

  return (
    <Form
      autoComplete="off"
      ref={formRef}
      onFinish={onSubmit}
      initialValues={companyInfo}
    >
      <Form.Item
        name="NIT"
        rules={[
          { required: true, message: "Please input company NIT!" },
        ]}
      >
        <Input
          disabled={isLoading}
          name="NIT"
          placeholder="NIT"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Please input company name!" },
        ]}
      >
        <Input
          disabled={isLoading}
          name="name"
          placeholder="Name"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item
        name="address"
        rules={[
          { required: true, message: "Please input company address!" },
        ]}
      >
        <Input
          disabled={isLoading}
          name="address"
          placeholder="Address"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: "Please input company phone!" },
        ]}
      >
        <Input
          disabled={isLoading}
          name="phone"
          placeholder="Phone"
          onChange={onInputChange}
        />
      </Form.Item>
      <Form.Item>
        <Button
          block
          loading={isLoading}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CompanyForm

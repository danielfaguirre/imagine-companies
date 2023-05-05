import { Button, Form, Input, Space } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useState } from "react"

export type ArticleInputFormType = {
  isLoading: boolean
  onAddNewArticle: (articleName: string) => void
}

const ArticleInputForm = ({ isLoading, onAddNewArticle }: ArticleInputFormType) => {
  const [articleName, setArticleName] = useState<string>("");
  const handleFormFinish = () => {
    onAddNewArticle(articleName);
    setArticleName("");
  };

  return (
    <Form autoComplete="off" onFinish={handleFormFinish}>
      <Space.Compact block>
        <Input
          required
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
          placeholder="Add new article here..."
          type="text"
        />
        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          icon={<PlusOutlined />}
        />
      </Space.Compact>
    </Form>
  )
}

export default ArticleInputForm

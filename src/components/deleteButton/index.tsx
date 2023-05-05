import { DeleteOutlined } from "@ant-design/icons"
import { Popconfirm, Button } from "antd"

export type DeleteButtonType = {
  isLoading: boolean
  title: string
  description: string
  onDelete: () => void
}

const DeleteButton = ({ isLoading, title, description, onDelete }: DeleteButtonType) => {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onDelete}
      okText="Yes"
      cancelText="No"
    >
      <Button size="small" loading={isLoading} danger type="link" icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}

export default DeleteButton

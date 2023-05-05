import { PlusOutlined } from "@ant-design/icons"
import { Button, Drawer, FloatButton } from "antd"
import { ReactNode } from "react"

export type RightDrawerType = {
  title: string
  buttonLabel: string
  isOpen: boolean
  onOpen: (isOpen: boolean) => void
  children: ReactNode | ReactNode[]
}

const RightDrawer = ({ title, isOpen, onOpen, children }: RightDrawerType) => {
  return (
    <>
      <FloatButton type="primary" onClick={() => onOpen(true)} icon={<PlusOutlined />} />
      <Drawer
        destroyOnClose
        title={title}
        placement="right"
        onClose={() => onOpen(false)}
        open={isOpen}>
        {children}
        <Button type="default" block onClick={() => onOpen(false)}>
          Cancel
        </Button>
      </Drawer>
    </>
  )
}

export default RightDrawer

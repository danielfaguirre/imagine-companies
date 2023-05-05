import { Menu } from "antd"
import { useAuthContext } from "../contexts/AuthContext"
import { LogoutOutlined } from "@ant-design/icons"

const Navbar = () => {
  const { setUserInfo } = useAuthContext()
  const handleClick = () => {
    setUserInfo(undefined)
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={[
        {
          key: 0,
          icon: <LogoutOutlined />,
          label: "Signout",
          onClick: () => handleClick()
        }
      ]}
    />
  )
}

export default Navbar
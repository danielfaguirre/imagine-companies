import { Button, List } from "antd"
import { CompanyType } from "../companyList/models"
import { ContainerOutlined, EditOutlined } from "@ant-design/icons"
import DeleteButton from "../../../../../components/deleteButton"
import { useAuthContext } from "../../../../../contexts/AuthContext"
import { RoleEnum } from "../../../../Auth/models"

export type CompanyListItemType = {
  isLoading: boolean
  company: CompanyType
  onDelete: (company: CompanyType) => void
  onEdit: (company: CompanyType) => void
  onAddArticles: (company: CompanyType) => void
}

const CompanyListItem = ({
  isLoading,
  company,
  onDelete,
  onEdit,
  onAddArticles
}: CompanyListItemType) => {
  const { user } = useAuthContext()
  const { NIT, name, phone, address } = company

  return (
    <List.Item
      actions={user?.role === RoleEnum.ADMIN ? [
        <DeleteButton
          isLoading={isLoading}
          title="Delete company"
          description="Are you sure to delete this company?"
          onDelete={() => onDelete(company)}
        />,
        <Button size="small" icon={<EditOutlined />} type="link" onClick={() => onEdit(company)} />,
        <Button size="small" icon={<ContainerOutlined />} type="link" onClick={() => onAddArticles(company)} />,
      ] : []}
    >
      <List.Item.Meta
        title={name}
        description={
          <>
            <section>
              <strong>NIT:</strong> {NIT}
            </section>
            <section>
              <strong>Address:</strong> {address}
            </section>
            <section>
              <strong>Phone:</strong> {phone}
            </section>
          </>
        }
      />
    </List.Item>)
}

export default CompanyListItem

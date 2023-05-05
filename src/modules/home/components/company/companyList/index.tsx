import { useCallback, useEffect } from "react"
import { CompanyType } from "./models"
import CompanyListItem from "../companyListItem"
import { List, Typography } from "antd"
import CompanyService from "../../../../../services/company.service"
import { useCompanyContext } from "../../../../../contexts/CompanyContext"

export type CompanyListType = {
  isLoading: boolean
  onDelete: (company: CompanyType) => void
  onEdit: (company: CompanyType) => void
  onAddArticles: (company: CompanyType) => void
}

const CompanyList = ({ isLoading, onDelete, onEdit, onAddArticles }: CompanyListType) => {
  const { companies, setCompanies } = useCompanyContext()

  const getCompanies = useCallback(async () => {
    const { data } = await CompanyService.getAllCompanies()
    setCompanies(data)
  }, [])

  useEffect(() => {
    getCompanies()
  }, [getCompanies])

  if (companies === null)
    return <>Loading...</>

  return (
    <>
      <Typography.Title>
        Companies
      </Typography.Title>
      <List
        bordered
        itemLayout="horizontal"
        dataSource={companies}
        renderItem={(company) =>
          <CompanyListItem
            company={company}
            onDelete={onDelete}
            onEdit={onEdit}
            onAddArticles={onAddArticles}
            isLoading={isLoading}
          />
        }
      >
      </List>
    </>
  )
}

export default CompanyList

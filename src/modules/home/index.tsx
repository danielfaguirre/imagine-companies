import { useCallback, useState } from "react"
import RightDrawer from "../../components/rightDrawer"
import CompanyForm from "./components/company/companyForm"
import useInputChange from "../../hooks/useInputChange"
import { FormTypeEnum } from "./models"
import ArticleForm from "./components/article/articleForm"
import CompanyList from "./components/company/companyList"
import { CompanyType } from "./components/company/companyList/models"
import CompanyService from "../../services/company.service"
import { useCompanyContext } from "../../contexts/CompanyContext"

const Home = () => {
  const { setCompanies } = useCompanyContext()
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [formType, setFormType] = useState<FormTypeEnum>(FormTypeEnum.Company)

  const companyInfoInitialState: CompanyType = {
    NIT: "",
    address: "",
    phone: "",
    name: "",
    articles: []
  }

  const [
    companyInfo,
    handleInputChange,
    setValues
  ] = useInputChange<CompanyType>(companyInfoInitialState);

  const getCompanies = useCallback(async () => {
    const { data } = await CompanyService.getAllCompanies()
    setCompanies(data)
  }, [])

  const handleDrawerOpen = (value: boolean) => {
    if (value) {
      setValues(companyInfoInitialState)
      setFormType(FormTypeEnum.Company)
    }
    setIsRightDrawerOpen(value)
  }

  const handleDelete = async (company: CompanyType) => {
    setIsLoading(true)
    const response = await CompanyService.deleteCompany(company.NIT)
    console.log(response)
    setIsLoading(false)
    getCompanies()
  }

  const handleEdit = (company: CompanyType) => {
    setFormType(FormTypeEnum.Company)
    setValues(company)
    setIsRightDrawerOpen(true)
    getCompanies()
  }

  const handleAddArticles = (company: CompanyType) => {
    setIsRightDrawerOpen(true)
    setValues(company)
    setFormType(FormTypeEnum.Articles)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    const response = await CompanyService.addCompany(companyInfo)
    console.log(response)
    setIsLoading(false)
    setIsRightDrawerOpen(false)
    getCompanies()
  }

  return (
    <>
      <RightDrawer
        title={"Company form"}
        buttonLabel="Create new Company"
        isOpen={isRightDrawerOpen}
        onOpen={(value) => handleDrawerOpen(value)}
      >
        {
          formType === FormTypeEnum.Company &&
          <CompanyForm
            companyInfo={companyInfo}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
          />
        }

        {
          formType === FormTypeEnum.Articles &&
          <ArticleForm articles={companyInfo.articles} />
        }
      </RightDrawer>
      <CompanyList
        isLoading={isLoading}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAddArticles={handleAddArticles}
      />
    </>
  )
}

export default Home

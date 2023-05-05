import http from "../config/http";
import { CompanyType } from "../modules/home/components/company/companyList/models";
import { SERVER_ROUTE } from "./constants";
import { EndpointsEnum } from "./models";

const url = `${SERVER_ROUTE}${EndpointsEnum.COMPANY}`;

const getAllCompanies = () => {
  return http.getData<CompanyType[]>(url)
}

const addCompany = (company: CompanyType) => {
  return http.postData<CompanyType, CompanyType>(url, company)
}

const updateCompany = (company: CompanyType) => {
  return http.patchData<CompanyType, CompanyType>(url, company, company.NIT)
}

const deleteCompany = (NIT: string) => {
  return http.deleteData(url, NIT)
}

const CompanyService = {
  getAllCompanies,
  addCompany,
  updateCompany,
  deleteCompany
}

export default CompanyService

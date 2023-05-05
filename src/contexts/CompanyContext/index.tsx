import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { CompanyContextType } from "../models";
import { CompanyType } from "../../modules/home/components/company/companyList/models";

const CompanyContext = createContext<CompanyContextType | undefined>(undefined)

const CompanyProvider = ({ children }: { children: ReactNode }) => {
  const [companies, setCompanies] = useState<CompanyType[] | null>(null)

  return (
    <CompanyContext.Provider value={{ companies, setCompanies }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompanyContext = () => {
  return useContext(CompanyContext) as CompanyContextType
}

export default CompanyProvider

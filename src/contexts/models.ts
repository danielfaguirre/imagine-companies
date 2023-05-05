import { UserType } from "../modules/Auth/models";
import { CompanyType } from "../modules/home/components/company/companyList/models";

export type AuthContextType = {
	user?: UserType;
	setUserInfo: (user?: UserType) => void;
};

export type CompanyContextType = {
	companies: CompanyType[] | null
	setCompanies: React.Dispatch<React.SetStateAction<CompanyType[] | null>>
}